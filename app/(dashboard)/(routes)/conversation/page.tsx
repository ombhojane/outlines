"use client";

import * as z from "zod";
import { LeafyGreen, LeafIcon, MessageSquare, ArrowRight, Text } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";


import { formSchema } from "./constants";
import { Card } from "@/components/ui/card";
import { text } from "stream/consumers";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your logic with the input value here
    console.log('Submitted value:', inputValue);
  };


  return ( 
    <div>
      <Heading
        title="Upload Files"
        description="Upload Single or Multiple Files."
        icon={Text}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="takeInside">
      <form className="formscard" onSubmit={handleSubmit}>
        <label className="label label1">
          Agent Name:
        </label>
        <br />
        <input
            type="text"
          />  
        <br />
        <label className="label label2">
          Agent ID:
        </label>
        <br />
        <input type="text"
            value={inputValue}
            onChange={handleChange}
            required />
        <br />
        <button className="button submitButton" type="submit">Submit</button>
      </form>
      </div>

    </div>
  );
}

export default ConversationPage;
