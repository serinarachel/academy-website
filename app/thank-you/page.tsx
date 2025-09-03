// @ts-nocheck
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ThankYouPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-navy-900 mb-4 font-unbounded">
              Thank You! 🎉
            </h1>
            <p className="text-xl text-gray-700 mb-2 font-satoshi">
              Your demo lecture has been booked successfully!
            </p>
            <p className="text-lg text-gray-600 font-satoshi">
              We're excited to show you the future of AI-powered digital marketing.
            </p>
          </div>

          {/* What Happens Next */}
          <Card className="mb-8 bg-white shadow-lg border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-navy-900 font-unbounded">
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-satoshi">24-Hour Confirmation</h3>
                  <p className="text-sm text-gray-600 font-satoshi">
                    We'll call you within 24 hours to confirm your demo session details.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-satoshi">Demo Session</h3>
                  <p className="text-sm text-gray-600 font-satoshi">
                    Attend your personalized demo lecture at our Churchgate campus.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-satoshi">Enrollment</h3>
                  <p className="text-sm text-gray-600 font-satoshi">
                    Join our next batch with only 4 students per class.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campus Information */}
          <Card className="mb-8 bg-white shadow-lg border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-bold text-navy-900 font-unbounded">
                Visit Our Campus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 font-satoshi">Location</h4>
                    <p className="text-sm text-gray-600 font-satoshi">
                      PIL Court, G12, near New Central Excise Building,<br />
                      New Marine Lines, Churchgate, Mumbai 400020
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 font-satoshi">Demo Timings</h4>
                    <p className="text-sm text-gray-600 font-satoshi">
                      <strong>Weekends:</strong> 10 AM - 6 PM<br />
                      <strong>Weekdays:</strong> 6 PM - 8 PM
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button 
              asChild 
              size="lg"
              className="w-full md:w-auto bg-adsmagnify-blue hover:bg-adsmagnify-dark-blue text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 font-satoshi"
            >
              <Link href="/courses">
                Explore Our Courses
              </Link>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="bg-white text-adsmagnify-blue border-2 border-adsmagnify-blue font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-adsmagnify-blue hover:text-white hover:scale-105 transform transition-all duration-300 font-satoshi"
              >
                <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="bg-white text-adsmagnify-blue border-2 border-adsmagnify-blue font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-adsmagnify-blue hover:text-white hover:scale-105 transform transition-all duration-300 font-satoshi"
              >
                <a href="tel:+917700090236">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm font-satoshi">
              Can't wait to meet you? Follow us on social media for daily digital marketing insights!
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://facebook.com/adsmagnifyacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com/adsmagnifyacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com/company/adsmagnifyacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
