import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Camera, 
  FileVideo, 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle,
  AlertCircle,
  // Clock,
  // Tag,
  // Settings,
  Save,
  Send
} from "lucide-react";

export function CreateClipPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    machineModel: "",
    process: "",
    tooling: "",
    step: "",
    privacy: "organization" as "public" | "private" | "organization",
    submitForReview: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setRecordedVideo(null);
      setUploadProgress(0);
      
      // Simulate upload progress
      setIsUploading(true);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    // In a real app, this would start camera recording
    setTimeout(() => {
      setIsRecording(false);
      setRecordedVideo("recorded-video-url");
      setUploadedFile(null);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    
    if (!formData.tags.trim()) {
      newErrors.tags = "At least one tag is required";
    }
    
    if (!uploadedFile && !recordedVideo) {
      newErrors.video = "Please upload a video or record one";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission
      console.log("Submitting clip:", formData);
      // In a real app, this would upload to the server
    }
  };

  const handleRemoveVideo = () => {
    setUploadedFile(null);
    setRecordedVideo(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="ghost">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Create New Training Clip
          </h1>
          <p className="text-text-secondary">
            Upload or record a 20-30 second video clip for your team
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Video Upload/Recording Section */}
          <Card>
            <CardHeader>
              <CardTitle>Video Content</CardTitle>
              <CardDescription>
                Choose how you want to add your training video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upload Option */}
                <div className="space-y-4">
                  <div className="text-center">
                    <FileVideo className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Upload Video</h3>
                    <p className="text-sm text-text-secondary mb-4">
                      Upload an existing video file from your device
                    </p>
                  </div>
                  
                  <div className="border-2 border-dashed border-divider-strong rounded-lg p-6 text-center hover:border-brand-primary transition-colors">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Video File
                    </Button>
                    <p className="text-xs text-text-muted mt-2">
                      MP4, MOV, AVI up to 100MB
                    </p>
                  </div>

                  {uploadedFile && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-primary">{uploadedFile.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={handleRemoveVideo}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      {isUploading && (
                        <div className="w-full bg-surface-elevated rounded-full h-2">
                          <div 
                            className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Recording Option */}
                <div className="space-y-4">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Record Video</h3>
                    <p className="text-sm text-text-secondary mb-4">
                      Record directly using your device camera
                    </p>
                  </div>
                  
                  <div className="border-2 border-dashed border-divider-strong rounded-lg p-6 text-center">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleStartRecording}
                      disabled={isRecording}
                      className="w-full"
                    >
                      {isRecording ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Recording... (3s)
                        </>
                      ) : (
                        <>
                          <Camera className="h-4 w-4 mr-2" />
                          Start Recording
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-text-muted mt-2">
                      Recommended: 20-30 seconds
                    </p>
                  </div>

                  {recordedVideo && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-primary">Recorded Video</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={handleRemoveVideo}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="w-full h-32 bg-surface-elevated rounded-lg flex items-center justify-center">
                        <Play className="h-8 w-8 text-text-muted" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {errors.video && (
                <div className="flex items-center mt-2 text-state-danger">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">{errors.video}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Video Information Form */}
          <Card>
            <CardHeader>
              <CardTitle>Video Information</CardTitle>
              <CardDescription>
                Provide details about your training clip
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-text-primary mb-2">
                    Title *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., CNC Machine Tool Change"
                    className={errors.title ? "border-state-danger" : ""}
                  />
                  {errors.title && (
                    <p className="text-sm text-state-danger mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="machineModel" className="block text-sm font-medium text-text-primary mb-2">
                    Machine Model
                  </label>
                  <Input
                    id="machineModel"
                    name="machineModel"
                    value={formData.machineModel}
                    onChange={handleInputChange}
                    placeholder="e.g., CNC-2000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe what this clip covers and what viewers will learn..."
                  rows={4}
                  className={`w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                    errors.description ? "border-state-danger" : "border-divider-strong"
                  }`}
                />
                {errors.description && (
                  <p className="text-sm text-state-danger mt-1">{errors.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="process" className="block text-sm font-medium text-text-primary mb-2">
                    Process
                  </label>
                  <Input
                    id="process"
                    name="process"
                    value={formData.process}
                    onChange={handleInputChange}
                    placeholder="e.g., Milling, Turning"
                  />
                </div>

                <div>
                  <label htmlFor="tooling" className="block text-sm font-medium text-text-primary mb-2">
                    Tooling
                  </label>
                  <Input
                    id="tooling"
                    name="tooling"
                    value={formData.tooling}
                    onChange={handleInputChange}
                    placeholder="e.g., End Mill, Drill Bit"
                  />
                </div>

                <div>
                  <label htmlFor="step" className="block text-sm font-medium text-text-primary mb-2">
                    Step
                  </label>
                  <Input
                    id="step"
                    name="step"
                    value={formData.step}
                    onChange={handleInputChange}
                    placeholder="e.g., Setup, Operation"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-text-primary mb-2">
                  Tags *
                </label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., safety, cnc, tool-change, setup"
                  className={errors.tags ? "border-state-danger" : ""}
                />
                <p className="text-xs text-text-muted mt-1">
                  Separate tags with commas
                </p>
                {errors.tags && (
                  <p className="text-sm text-state-danger mt-1">{errors.tags}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Submission Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Submission</CardTitle>
              <CardDescription>
                Control who can see your clip and submission workflow
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label htmlFor="privacy" className="block text-sm font-medium text-text-primary mb-2">
                  Privacy Level
                </label>
                <select
                  id="privacy"
                  name="privacy"
                  value={formData.privacy}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-divider-strong rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="organization">Organization Only</option>
                  <option value="private">Private (Me Only)</option>
                  <option value="public">Public</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  id="submitForReview"
                  name="submitForReview"
                  type="checkbox"
                  checked={formData.submitForReview}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-divider-strong rounded"
                />
                <label htmlFor="submitForReview" className="text-sm text-text-primary">
                  Submit for review before publishing
                </label>
              </div>

              <div className="bg-state-success-bg border border-state-success/20 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-state-success mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-state-success">Best Practices</h4>
                    <ul className="text-sm text-text-secondary mt-1 space-y-1">
                      <li>• Keep clips between 20-30 seconds for optimal learning</li>
                      <li>• Ensure good lighting and clear audio</li>
                      <li>• Include safety procedures when relevant</li>
                      <li>• Use descriptive titles and tags for better searchability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button type="submit">
              <Send className="h-4 w-4 mr-2" />
              {formData.submitForReview ? "Submit for Review" : "Publish Clip"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
