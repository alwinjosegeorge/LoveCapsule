import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Heart, MessageCircle, Plus, Send, Users } from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const upcomingWishes = [
    {
      id: 1,
      title: "Mom's Birthday Message",
      recipient: "Sarah Johnson",
      deliveryDate: "2024-03-15",
      type: "video",
      status: "scheduled"
    },
    {
      id: 2,
      title: "Anniversary Wish",
      recipient: "John & Maria",
      deliveryDate: "2024-04-22",
      type: "text",
      status: "scheduled"
    }
  ];

  const drafts = [
    {
      id: 1,
      title: "Graduation Congratulations",
      lastEdited: "2024-01-20",
      type: "audio"
    }
  ];

  const sentWishes = [
    {
      id: 1,
      title: "Christmas Wishes",
      recipient: "Family Group",
      deliveredDate: "2023-12-25",
      type: "video"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dawn">
      {/* Header */}
      <div className="glass-card border-b border-border/20 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, 
                <span className="bg-gradient-sunset bg-clip-text text-transparent"> Alex</span>
              </h1>
              <p className="text-muted-foreground">
                You have {upcomingWishes.length} wishes scheduled for delivery
              </p>
            </div>
            <Button variant="hero" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Wish
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{upcomingWishes.length}</p>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-warning/10">
                  <MessageCircle className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{drafts.length}</p>
                  <p className="text-sm text-muted-foreground">Drafts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <Send className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{sentWishes.length}</p>
                  <p className="text-sm text-muted-foreground">Delivered</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Recipients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Wishes */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Deliveries
                </CardTitle>
                <CardDescription>
                  Wishes scheduled to be delivered soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingWishes.map((wish) => (
                    <div key={wish.id} className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border/30 hover:bg-card/80 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {wish.type === 'video' && <MessageCircle className="w-4 h-4 text-primary" />}
                          {wish.type === 'text' && <MessageCircle className="w-4 h-4 text-primary" />}
                          {wish.type === 'audio' && <MessageCircle className="w-4 h-4 text-primary" />}
                        </div>
                        <div>
                          <h4 className="font-medium">{wish.title}</h4>
                          <p className="text-sm text-muted-foreground">To: {wish.recipient}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{wish.deliveryDate}</span>
                        </div>
                        <Badge variant="secondary">{wish.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Drafts */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-warning" />
                  Recent Drafts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {drafts.map((draft) => (
                    <div key={draft.id} className="p-3 rounded-lg bg-card/50 border border-border/30 hover:bg-card/80 transition-colors cursor-pointer">
                      <h5 className="font-medium text-sm">{draft.title}</h5>
                      <p className="text-xs text-muted-foreground">
                        Edited {draft.lastEdited}
                      </p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {draft.type}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4" size="sm">
                  View All Drafts
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="warm" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Text Wish
                </Button>
                <Button variant="warm" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Record Audio
                </Button>
                <Button variant="warm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Recipients
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;