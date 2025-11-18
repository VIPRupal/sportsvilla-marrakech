import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export default function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailAddress })
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit email');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Check your email for the free guide.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send guide. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      mutation.mutate(email);
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section 
      className="w-full border-b"
      style={{ 
        backgroundColor: '#FAF7F2',
        borderBottomColor: '#E6DED5',
        marginTop: '10px',
        marginBottom: '12px',
        paddingTop: '8px',
        paddingBottom: '8px'
      }}
    >
      <div className="w-full px-4 md:px-6">
        {/* Line 1: Text - centered */}
        <div className="w-full text-center mb-2">
          <p 
            style={{ 
              fontSize: '12px',
              fontWeight: 600,
              color: '#333'
            }}
          >
            FREE GUIDE: Don't Book a Marrakech Villa Before Reading This
          </p>
        </div>
        
        {/* Line 2: Form - centered */}
        <form onSubmit={handleSubmit} className="flex justify-center items-center" style={{ gap: '12px' }}>
          {/* Email input */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={mutation.isPending}
            required
            data-testid="input-lead-email"
            className="px-3 border focus:outline-none focus:ring-1 focus:ring-opacity-50"
            style={{
              height: '28px',
              borderRadius: '6px',
              width: '150px',
              fontSize: '12px',
              borderColor: '#D8D4CD'
            }}
          />
          
          {/* Button */}
          <button 
            type="submit" 
            disabled={mutation.isPending}
            data-testid="button-submit-lead"
            className="text-white transition-colors hover:opacity-90 disabled:opacity-50"
            style={{
              backgroundColor: '#C48A3E',
              height: '28px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderRadius: '6px',
              fontSize: '12px'
            }}
          >
            {mutation.isPending ? "..." : "Get Guide"}
          </button>
        </form>
      </div>
    </section>
  );
}
