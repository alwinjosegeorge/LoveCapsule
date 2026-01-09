import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Heart, Mic, Video, Type, Calendar as CalendarIcon, Users, ArrowLeft, ArrowRight, Plus, X, Loader2, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const CreateWish = () => {
  const [step, setStep] = useState(1);
  const [wishType, setWishType] = useState<string>("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [recurring, setRecurring] = useState("once");
  const [recipients, setRecipients] = useState<string[]>([]);
  const [newRecipient, setNewRecipient] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const addRecipient = () => {
    if (newRecipient && !recipients.includes(newRecipient)) {
      setRecipients([...recipients, newRecipient]);
      setNewRecipient("");
    }
  };

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter(r => r !== email));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    setIsSubmitting(true);

    try {
      let finalContent = content;

      // Handle File Upload if Video/Voice
      if (file && (wishType === 'video' || wishType === 'voice')) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('wish-assets')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        finalContent = fileName; // Store the path
      }

      // Insert Wish
      const { data: wishData, error: wishError } = await supabase
        .from('wishes')
        .insert({
          user_id: user.id,
          title,
          type: wishType,
          content: finalContent,
          delivery_date: date ? format(date, "yyyy-MM-dd") : null,
          delivery_time: time,
          recurring: recurring !== 'once',
          status: 'scheduled'
        })
        .select()
        .single();

      if (wishError) throw wishError;

      // Insert Recipients
      if (recipients.length > 0 && wishData) {
        const recipientsData = recipients.map(email => ({
          wish_id: wishData.id,
          email,
          name: email.split('@')[0] // Default name
        }));

        const { error: recipientError } = await supabase
          .from('recipients')
          .insert(recipientsData);

        if (recipientError) throw recipientError;
      }

      toast({
        title: "Wish Created!",
        description: "Your LoveCapsule has been scheduled successfully.",
      });

      navigate('/dashboard');

    } catch (error: unknown) {
      console.error(error);
      const message = error instanceof Error ? error.message : "An error occurred";
      toast({
        variant: "destructive",
        title: "Error creating wish",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const wishTypes = [
    { id: "text", icon: Type, title: "Text Message", description: "Write a heartfelt message" },
    { id: "voice", icon: Mic, title: "Voice Recording", description: "Upload a voice recording" },
    { id: "video", icon: Video, title: "Video Message", description: "Upload a video message" }
  ];

  return (
    <div className="min-h-screen bg-gradient-dawn">
      {/* Header */}
      <div className="glass-card border-b border-border/20">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              <span className="text-xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
                Create New Wish
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">Step {step} of 4</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-gradient-sunset rounded-full h-2 transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Choose Type */}
        {step === 1 && (
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Choose Your Wish Type</CardTitle>
              <CardDescription>
                How would you like to express your feelings?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {wishTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setWishType(type.id)}
                    className={`p-6 rounded-lg border-2 transition-all duration-300 text-left hover:shadow-soft ${wishType === type.id
                      ? 'border-primary bg-primary/5 shadow-soft'
                      : 'border-border hover:border-primary/50'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${wishType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                        <type.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{type.title}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  variant="hero"
                  onClick={() => setStep(2)}
                  disabled={!wishType}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Create Content */}
        {step === 2 && (
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create Your {wishTypes.find(t => t.id === wishType)?.title}</CardTitle>
              <CardDescription>
                Express your feelings in your own words
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-sm font-medium">Wish Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Happy Birthday Message"
                  className="mt-1"
                />
              </div>

              {wishType === "text" && (
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
                  <Textarea
                    id="message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your heartfelt message here..."
                    className="mt-1 min-h-[150px] resize-none"
                  />
                </div>
              )}

              {(wishType === "voice" || wishType === "video") && (
                <div className="text-center py-12">
                  <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-muted/30 w-full">
                    {wishType === "voice" ? <Mic className="w-12 h-12 text-primary" /> : <Video className="w-12 h-12 text-primary" />}
                    <h3 className="text-lg font-semibold">Upload {wishType === "voice" ? "Audio" : "Video"}</h3>
                    <Input
                      type="file"
                      accept={wishType === "voice" ? "audio/*" : "video/*"}
                      onChange={handleFileUpload}
                      className="max-w-xs"
                    />
                    {file && <p className="text-sm text-success">Selected: {file.name}</p>}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  variant="hero"
                  onClick={() => setStep(3)}
                  disabled={!title || (wishType === 'text' && !content) || (wishType !== 'text' && !file)}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Schedule Delivery</CardTitle>
              <CardDescription>
                When should this wish be delivered?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium">Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start mt-1">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-sm font-medium">Delivery Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00:00">9:00 AM</SelectItem>
                    <SelectItem value="12:00:00">12:00 PM</SelectItem>
                    <SelectItem value="18:00:00">6:00 PM</SelectItem>
                    <SelectItem value="21:00:00">9:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium">Recurring Delivery</Label>
                <Select value={recurring} onValueChange={setRecurring}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="One-time or recurring?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">One-time delivery</SelectItem>
                    <SelectItem value="yearly">Every year</SelectItem>
                    <SelectItem value="monthly">Every month</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(2)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" onClick={() => setStep(4)} disabled={!date || !time}>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Recipients */}
        {step === 4 && (
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Add Recipients</CardTitle>
              <CardDescription>
                Who should receive this wish?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium">Add Recipient Email</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    placeholder="recipient@email.com"
                    value={newRecipient}
                    onChange={(e) => setNewRecipient(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addRecipient()}
                  />
                  <Button onClick={addRecipient} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {recipients.length > 0 && (
                <div>
                  <Label className="text-sm font-medium">Recipients ({recipients.length})</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {recipients.map((email) => (
                      <Badge key={email} variant="secondary" className="pl-3 pr-1 py-1">
                        {email}
                        <button
                          onClick={() => removeRecipient(email)}
                          className="ml-2 hover:bg-destructive/20 rounded-full p-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(3)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" className="px-8" onClick={handleSubmit} disabled={isSubmitting || recipients.length === 0}>
                  {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Heart className="w-4 h-4 mr-2" fill="currentColor" />}
                  Create Wish
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CreateWish;
