import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Newspaper, Text, Search } from "lucide-react";

const TrueCaptionsDocsPage = async () => {
  return (
    <div>
      <Heading
        icon={Newspaper}
        title="Outlines Docs"
        description="Explore the powerful features offered by Outlines."
        bgColor="blue-100" // Adjust color to match your theme
        iconColor="blue-600" // Adjust color to match your theme
      />

      <div className="px-4 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold mb-4">Featured Capabilities</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature 1: AI Text Detector */}
          <FeatureCard
            title="AI Text Detector"
            description="Analyze text content with advanced AI algorithms. Gain insights into patterns and sentiments."
            icon={Text} // Placeholder icon for now
          />

          {/* Feature 2: Image Insights */}
          
        </div>

        <h2 className="text-2xl font-bold mb-4">Further Exploration & Relevant Links</h2>

        <ul className="space-y-4">
          <li>
            <a href="/docs/detailed-text-analysis">Dive deeper into AI Text Detector capabilities.</a>
          </li>
          <li>
            <a href="/docs/image-recognition-examples">Discover real-world use cases for Image Insights.</a>
          </li>
          <li>
            <a href="/docs/combating-misinformation">Learn how the Fake News Detector works.</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ComponentType }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="mr-4">
        
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default TrueCaptionsDocsPage;