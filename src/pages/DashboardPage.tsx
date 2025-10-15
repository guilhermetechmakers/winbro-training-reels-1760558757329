import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Play, 
  Upload, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  Download,
  Share2,
  Bookmark
} from "lucide-react";

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock data for demonstration
  const recentClips = [
    {
      id: "1",
      title: "CNC Machine Setup - Tool Change",
      description: "Step-by-step guide for changing tools on the CNC machine",
      duration: "0:28",
      thumbnail: "/api/placeholder/300/200",
      tags: ["CNC", "Tool Change", "Setup"],
      views: 124,
      likes: 8,
      createdAt: "2 hours ago"
    },
    {
      id: "2", 
      title: "Safety Check - Lockout Procedure",
      description: "Essential safety lockout procedure before maintenance",
      duration: "0:22",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Safety", "Lockout", "Maintenance"],
      views: 89,
      likes: 12,
      createdAt: "4 hours ago"
    },
    {
      id: "3",
      title: "Quality Inspection - Part Measurement",
      description: "How to properly measure parts for quality control",
      duration: "0:31",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Quality", "Measurement", "Inspection"],
      views: 156,
      likes: 15,
      createdAt: "1 day ago"
    }
  ];

  const assignedCourses = [
    {
      id: "1",
      title: "Machine Operation Fundamentals",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      nextLesson: "Advanced Safety Procedures"
    },
    {
      id: "2",
      title: "Quality Control Standards",
      progress: 40,
      totalLessons: 8,
      completedLessons: 3,
      nextLesson: "Measurement Techniques"
    }
  ];

  const quickStats = [
    { label: "Total Clips", value: "247", change: "+12%", trend: "up" },
    { label: "Courses Completed", value: "8", change: "+2", trend: "up" },
    { label: "Hours Watched", value: "42", change: "+5h", trend: "up" },
    { label: "Certificates", value: "3", change: "+1", trend: "up" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-divider-strong bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-brand-primary">Winbro Training Reels</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
                <Input
                  placeholder="Search clips, courses, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome back, John!
          </h1>
          <p className="text-text-secondary">
            Continue your training journey with personalized recommendations
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-secondary">{stat.label}</p>
                    <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                  </div>
                  <div className="flex items-center text-state-success">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Clips */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-text-primary">Recent Clips</h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 gap-6" 
              : "space-y-4"
            }>
              {recentClips.map((clip) => (
                <Card key={clip.id} className="animate-fade-in-up hover:shadow-popover transition-shadow group">
                  <CardContent className="p-0">
                    <div className={viewMode === "grid" ? "block" : "flex"}>
                      {/* Thumbnail */}
                      <div className={`relative ${viewMode === "grid" ? "w-full h-48" : "w-32 h-20 flex-shrink-0"}`}>
                        <div className="w-full h-full bg-surface-elevated rounded-t-lg flex items-center justify-center">
                          <Play className="h-8 w-8 text-text-muted" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {clip.duration}
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <h3 className="font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                          {clip.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                          {clip.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {clip.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block bg-brand-subtle text-brand-primary text-xs px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-text-muted">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {clip.createdAt}
                            </span>
                            <span>{clip.views} views</span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              {clip.likes}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline">
                View All Clips
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Assigned Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Assigned Courses
                </CardTitle>
                <CardDescription>
                  Continue your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {assignedCourses.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-text-primary">{course.title}</h4>
                      <span className="text-sm text-text-muted">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-surface-elevated rounded-full h-2">
                      <div 
                        className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-text-secondary">
                      {course.completedLessons}/{course.totalLessons} lessons completed
                    </p>
                    <p className="text-xs text-text-muted">
                      Next: {course.nextLesson}
                    </p>
                    <Button size="sm" className="w-full">
                      Continue Course
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Clip
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Invite Team Members
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest training progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-state-success rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-text-primary">Completed "Safety Procedures" quiz</p>
                    <p className="text-xs text-text-muted">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-text-primary">Watched "CNC Setup" clip</p>
                    <p className="text-xs text-text-muted">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-state-warning rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-text-primary">New course assigned</p>
                    <p className="text-xs text-text-muted">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
