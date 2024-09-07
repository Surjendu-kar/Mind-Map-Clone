export interface DemoData {
  data: string;
  source: string;
  type: string;
  created: string;
}

export const useDemoData = (): DemoData[] => {
  return [
    {
      data: "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
      source: "--",
      type: "TEXT",
      created: "8/3/2024",
    },
    {
      data: "I want to test your chatbot That's great to hear! You can continue chatting with me to test BeyondChats AI responses! I am one of the AIs! 😊 Else, you can also book a demo call with my team: https://calendly.com/beyondchats/15min",
      source: "--",
      type: "TEXT",
      created: "3/28/2024",
    },
    {
      data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
    },
    {
      data: "What is the cost of IVF? I can't provide specific information on IVF costs, but I can tell you about how our chatbot services can enhance your business by generating high-quality leads and providing 24/7 support to your customers.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
    },
    {
      data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
    },
    {
      data: "Which languages can you talk in? Multilingual support is the core of my AI!  I can speak many popular languages.  Just talk in the language you are comfortable in! Supported languages include: Regional Indian languages like Hindi, Marathi, Bengali, Tamil, etc. International languages I can speak fluently: German, French, Portuguese, etc.",
      source: "--",
      type: "TEXT",
      created: "3/13/2024",
    },
  ];
};
