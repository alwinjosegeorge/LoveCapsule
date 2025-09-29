import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Heart, Mic, Video, Type, Calendar as CalendarIcon, Users, ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const CreateWish = () => {
  const [step, setStep] = useState(1);
  const [wishType, setWishType] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [recipients, setRecipients] = useState<string[]>([]);
  const [newRecipient, setNewRecipient] = useState("");

  const addRecipient = () => {
    if (newRecipient && !recipients.includes(newRecipient)) {
      setRecipients([...recipients, newRecipient]);
      setNewRecipient("");
    }
  };

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter(r => r !== email));
  };

  const wishTypes = [
    { id: "text", icon: Type, title: "Text Message", description: "Write a heartfelt message" },
    { id: "voice", icon: Mic, title: "Voice Recording", description: "Record your voice" },
    { id: "video", icon: Video, title: "Video Message", description: "Upload or record video" }
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
                    className={`p-6 rounded-lg border-2 transition-all duration-300 text-left hover:shadow-soft ${
                      wishType === type.id 
                        ? 'border-primary bg-primary/5 shadow-soft' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        wishType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
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
                  placeholder="e.g., Happy Birthday Message for Sarah"
                  className="mt-1"
                />
              </div>

              {wishType === "text" && (
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Write your heartfelt message here..."
                    className="mt-1 min-h-[150px] resize-none"
                  />
                </div>
              )}

              {wishType === "voice" && (
                <div className="text-center py-12">
                  <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-muted/30">
                    <Mic className="w-12 h-12 text-primary" />
                    <h3 className="text-lg font-semibold">Voice Recorder</h3>
                    <p className="text-muted-foreground text-center max-w-sm">
                      Click the button below to start recording your voice message
                    </p>
                    <Button variant="hero" size="lg">
                      <Mic className="w-5 h-5 mr-2" />
                      Start Recording
                    </Button>
                  </div>
                </div>
              )}

              {wishType === "video" && (
                <div className="text-center py-12">
                  <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-muted/30">
                    <Video className="w-12 h-12 text-primary" />
                    <h3 className="text-lg font-semibold">Video Upload</h3>
                    <p className="text-muted-foreground text-center max-w-sm">
                      Upload an existing video or record a new one
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline">
                        Upload Video
                      </Button>
                      <Button variant="hero">
                        <Video className="w-5 h-5 mr-2" />
                        Record New
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" onClick={() => setStep(3)}>
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
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-sm font-medium">Delivery Time</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                    <SelectItem value="21:00">9:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium">Recurring Delivery</Label>
                <Select>
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
                <Button variant="hero" onClick={() => setStep(4)}>
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

              <div>
                <Label className="text-sm font-medium">Privacy Setting</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Who can access this wish?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private - Only recipients</SelectItem>
                    <SelectItem value="family">Family members only</SelectItem>
                    <SelectItem value="public">Public - Anyone with link</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(3)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" className="px-8">
                  <Heart className="w-4 h-4 mr-2" fill="currentColor" />
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