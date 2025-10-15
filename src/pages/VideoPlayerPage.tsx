import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Settings, 
  Maximize, 
  Download, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  ThumbsDown,
  Clock,
  User,
  Calendar,
  Tag,
  ChevronLeft,
} from "lucide-react";

export function VideoPlayerPage() {
  const { id } = useParams<{ id: string }>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // const [playbackRate, setPlaybackRate] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);

  // Mock video data
  const videoData = {
    id: id || "1",
    title: "CNC Machine Setup - Tool Change",
    description: "Step-by-step guide for changing tools on the CNC machine. This comprehensive tutorial covers safety procedures, tool selection, and proper installation techniques.",
    duration: 28,
    thumbnail: "/api/placeholder/800/450",
    videoUrl: "/api/video/sample.mp4",
    transcript: "Welcome to this CNC machine tool change tutorial. First, ensure the machine is properly locked out and tagged out for safety. Next, remove the old tool by loosening the collet...",
    tags: ["CNC", "Tool Change", "Setup", "Safety", "Manufacturing"],
    views: 1247,
    likes: 89,
    dislikes: 3,
    createdAt: "2024-01-15",
    createdBy: "John Smith",
    organization: "Winbro Manufacturing"
  };

  const relatedClips = [
    {
      id: "2",
      title: "CNC Machine Safety Procedures",
      duration: "0:24",
      thumbnail: "/api/placeholder/300/200",
      views: 892
    },
    {
      id: "3", 
      title: "Tool Selection Guidelines",
      duration: "0:31",
      thumbnail: "/api/placeholder/300/200",
      views: 654
    },
    {
      id: "4",
      title: "Machine Calibration Process",
      duration: "0:26",
      thumbnail: "/api/placeholder/300/200",
      views: 423
    }
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = parseFloat(e.target.value);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-divider-strong bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-4">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-brand-primary">Winbro Training Reels</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-black">
                  <video
                    ref={videoRef}
                    className="w-full h-auto"
                    poster={videoData.thumbnail}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={videoData.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="lg"
                      className="h-16 w-16 rounded-full"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8" />
                      )}
                    </Button>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="space-y-2">
                      {/* Progress Bar */}
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-sm font-mono">
                          {formatTime(currentTime)}
                        </span>
                        <input
                          type="range"
                          min="0"
                          max={duration}
                          value={currentTime}
                          onChange={handleSeek}
                          className="flex-1 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-white text-sm font-mono">
                          {formatTime(duration)}
                        </span>
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20"
                            onClick={() => setIsMuted(!isMuted)}
                          >
                            {isMuted ? (
                              <VolumeX className="h-4 w-4" />
                            ) : (
                              <Volume2 className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20"
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20"
                          >
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Information */}
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{videoData.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-text-muted mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {formatTime(duration)}
                      </span>
                      <span>{videoData.views.toLocaleString()} views</span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {videoData.createdBy}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(videoData.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {videoData.likes}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      {videoData.dislikes}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4">{videoData.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {videoData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-brand-subtle text-brand-primary text-sm rounded"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant={showTranscript ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowTranscript(!showTranscript)}
                  >
                    {showTranscript ? "Hide" : "Show"} Transcript
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>

                {showTranscript && (
                  <div className="mt-4 p-4 bg-surface-sunken rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-2">Transcript</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {videoData.transcript}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Clips */}
            <Card>
              <CardHeader>
                <CardTitle>Related Clips</CardTitle>
                <CardDescription>
                  More training content you might like
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedClips.map((clip) => (
                  <div key={clip.id} className="flex space-x-3 group cursor-pointer">
                    <div className="relative w-32 h-20 bg-surface-elevated rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Play className="h-6 w-6 text-text-muted" />
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                        {clip.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-text-primary group-hover:text-brand-primary transition-colors line-clamp-2">
                        {clip.title}
                      </h4>
                      <p className="text-sm text-text-muted mt-1">
                        {clip.views.toLocaleString()} views
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>
                  You're watching: Machine Operation Fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Module 2 of 5</span>
                    <span className="text-sm font-medium text-text-primary">40%</span>
                  </div>
                  <div className="w-full bg-surface-elevated rounded-full h-2">
                    <div 
                      className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <p className="text-sm text-text-secondary">
                    4 of 10 lessons completed
                  </p>
                  <Button size="sm" className="w-full">
                    Continue Course
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>My Notes</CardTitle>
                <CardDescription>
                  Add personal notes about this clip
                </CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  placeholder="Add your notes here..."
                  className="w-full h-24 p-3 border border-divider-strong rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <Button size="sm" className="mt-2">
                  Save Note
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
