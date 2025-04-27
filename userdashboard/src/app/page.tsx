"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  MessageSquare,
  Clock,
  // Users,
  // Bell,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import Chatbot from "@/components/chatbot/chatbot";

export default function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <Chatbot/>
      <section className="mt-5 w-full h-[95vh] bg-gradient-to-b from-red-50 to-red-100 dark:from-gray-900 dark:to-red-950/70 relative flex flex-col items-center justify-between py-10">
        <div className="container px-4 max-w-3xl mx-auto text-center mt-8">
          <div className="mb-4 animate-pulse">
            <Shield className="h-16 w-16 text-red-600 dark:text-red-500 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground">
            Emergency Help. Instantly.
          </h1>

          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all mb-8"
            asChild
          >
            <Link href="/">
              Get Help Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        {/* YouTube Video Embed */}
        <div className="mt-10 w-full max-w-4xl mx-auto px-4 mb-5">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              title="ResQMe Emergency Services"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* How It Works - Using shadcn/ui Card components */}
      <section className="w-full py-16 bg-background">
        <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 mb-5 text-center">
             <div className="space-y-2">
               <h2 className="mt-10 mb-35 text-3xl font-bold tracking-tighter md:text-4xl">
                 Simple, Fast, and Reliable
               </h2>
              
             </div>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mb-2">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Text</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">Send a simple text message</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Instant</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">Immediate response</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mb-2">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Help</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">Emergency services dispatched</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features - Using shadcn/ui components */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          {/* <div className="flex justify-center mb-8">

<div className="flex flex-col items-center justify-center space-y-4 mb-5 text-center">
             <div className="space-y-2">
               <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                 Key Features
               </h2>
              
             </div>
           </div>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background border-none shadow-sm items-center">
              <CardContent className="flex items-center p-6">
                <Clock className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">24/7 Monitoring</h3>
                  <p className="text-muted-foreground text-sm">Always on</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-sm items-center">
              <CardContent className="flex items-center p-6">
                <Users className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">Contact Alerts</h3>
                  <p className="text-muted-foreground text-sm">Automatic notifications</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-sm items-center">
              <CardContent className="flex items-center p-6 text-center">
                <Bell className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">Secure & Private</h3>
                  <p className="text-muted-foreground text-sm">End-to-end encryption</p>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* CTA - Using shadcn/ui components */}
      <section className="w-full py-15 bg-red-300 text-white">
        <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4  text-center">
           </div>
          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent><b>© 2025</b></CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}