"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  IndianRupee,
  Star,
  Zap,
  Target,
  Award,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  TrendingUp,
  Shield,
  Brain,
  BarChart3,
  PlayCircle,
  FileText,
  MessageCircle,
  Gift,
  AlertTriangle,
  Heart,
  DollarSign,
  BarChart
} from "lucide-react";

export default function AdProfitMasteryProgram() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    city: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to thank you page
    router.push('/thank-you');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Attention Banner */}
      <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center gap-2 mb-2 animate-pulse">
            <AlertTriangle className="h-5 w-5 animate-bounce" />
            <span className="font-bold text-lg">ATTN: IF YOU DON'T KNOW META ADS BASICS, THIS IS NOT FOR YOU!</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-adsmagnify-blue via-adsmagnify-dark-blue to-adsmagnify-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl text-white lg:text-6xl font-bold mb-6 leading-tight">
              Run Meta Ads Peacefully using the
              <span className="block text-adsmagnify-dark-yellow">AdProfit Mastery Program</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Learn the updated 2025 method to launch & scale Meta Ads from spending ₹0 to up to ₹50K <em>per day</em> profitably <strong>WITHOUT</strong> any complexity
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              (...like <strong>without</strong> duplicating ad sets, <strong>without</strong> launching multiple campaigns, and <strong>without</strong> laser targeting)
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="h-6 w-6 text-adsmagnify-dark-yellow" />
                <span className="text-lg font-semibold">4 Weeks:</span>
                <span className="text-lg">Step-by-step training</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <Calendar className="h-6 w-6 text-adsmagnify-dark-yellow" />
                <span className="text-lg font-semibold">Next Batch:</span>
                <span className="text-lg">27th October 2025</span>
              </div>

              <Button
                size="lg"
                className="bg-adsmagnify-dark-yellow hover:bg-white text-adsmagnify-blue font-bold text-xl px-12 py-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 mb-4"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                JOIN NOW AT ₹9,999
              </Button>

              <div className="text-red-300 font-bold text-lg">
                ⚠️ LIMITED SEATS AVAILABLE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven to Work For */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-adsmagnify-blue/5 to-adsmagnify-dark-yellow/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-block bg-adsmagnify-blue/10 px-4 py-2 rounded-full border border-adsmagnify-blue/20 mb-4">
                <span className="text-adsmagnify-blue font-semibold text-sm">✅ PROVEN RESULTS</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-4">
                PROVEN TO WORK FOR
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our system has helped businesses across different industries scale their Meta Ads profitably
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">ECOM BUSINESSES</h3>
                <p className="text-sm text-gray-600">Scale product sales with profitable ad campaigns</p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">COACHING FUNNELS</h3>
                <p className="text-sm text-gray-600">Generate high-quality leads for coaching programs</p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">CONSULTING FUNNELS</h3>
                <p className="text-sm text-gray-600">Attract premium clients with targeted campaigns</p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">HIGH TICKET FUNNELS</h3>
                <p className="text-sm text-gray-600">Convert high-value prospects with precision targeting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this workshop for */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-adsmagnify-blue/5 via-transparent to-adsmagnify-dark-yellow/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-adsmagnify-blue/10 px-4 py-2 rounded-full border border-adsmagnify-blue/20 mb-6">
                <span className="text-adsmagnify-blue font-semibold text-sm">🎯 TARGET AUDIENCE</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-6">
                Who is this program for?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This program is designed for marketers who are struggling with Meta Ads and need a proven system to scale profitably
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">If you tried running Meta ads but got little to no results from conversion or lead ads in 2025</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">If you feel stressed launching and managing multiple campaigns/ad sets and not getting quality leads</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">If your ad cost rises as soon as you increase the budget by 10-20% following the usual scaling method</p>
                </div>
              </div>

              <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">If you tried duplicating campaigns/ad sets in order to scale, but it failed to deliver stable results</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">If you are using laser targeting and audience interest stacking but not getting consistent results</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">If you find it confusing how many campaigns, ad sets, or ads to launch at what budget and how often</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-adsmagnify-blue/10 to-adsmagnify-dark-yellow/10 p-8 rounded-3xl text-center border border-adsmagnify-blue/20 shadow-xl">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <p className="text-xl text-adsmagnify-blue font-semibold mb-4">
                    "If you truly want to build a business online that makes you enough money and keeps you at peace, paid traffic generation with less complexity is essential." 
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-adsmagnify-blue/20 max-w-2xl mx-auto shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center justify-center gap-3 bg-adsmagnify-blue/10 rounded-xl p-4">
                      <Clock className="h-6 w-6 text-adsmagnify-blue" />
                      <div className="text-left">
                        <span className="text-lg font-semibold block text-adsmagnify-blue">4 Weeks</span>
                        <span className="text-sm text-gray-600">Step-by-step training</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 bg-adsmagnify-blue/10 rounded-xl p-4">
                      <Calendar className="h-6 w-6 text-adsmagnify-blue" />
                      <div className="text-left">
                        <span className="text-lg font-semibold block text-adsmagnify-blue">Next Batch</span>
                        <span className="text-sm text-gray-600">Starting Soon</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-adsmagnify-blue to-adsmagnify-dark-blue hover:from-adsmagnify-dark-blue hover:to-adsmagnify-blue text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300 mb-4"
                    onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    🚀 JOIN NOW AT ₹9,999
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-lg animate-pulse">
                    <AlertTriangle className="h-5 w-5" />
                    <span>LIMITED SEATS AVAILABLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What will you learn */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-adsmagnify-blue/5 to-adsmagnify-dark-yellow/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-adsmagnify-blue/10 px-4 py-2 rounded-full border border-adsmagnify-blue/20 mb-6">
                <span className="text-adsmagnify-blue font-semibold text-sm">📚 LEARNING OUTCOMES</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-6">
                What will you learn in the program?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master the proven strategies and frameworks that are helping businesses scale their Meta Ads profitably
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-lg mb-3">Campaign Launch Method</h3>
                <p className="text-gray-600">The campaign launch method if and when you are launching an ad campaign for the first time</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-lg mb-3">Audience Testing Strategy</h3>
                <p className="text-gray-600">The strategy to test different audience interests by checking audience overlap before you even launch</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-lg mb-3">Ad Testing Framework</h3>
                <p className="text-gray-600">Our proprietary ad testing framework 1:1:3 and 1:1:2 that allows to test and find a winning ad fast</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-lg mb-3">Ad Fatigue Science</h3>
                <p className="text-gray-600">The science behind ad fatigue, audience overlap, and auction overlap and how to avoid the same</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-lg mb-3">Scaling System</h3>
                <p className="text-gray-600">The ad scaling system that is helping us take our clients accounts from spending 0 to up to 50K per day</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-lg mb-3">AMP Implementation</h3>
                <p className="text-gray-600">What is the AdProfit Mastery Program™ and how to start implementing it for a stable ad performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do you resonate */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Do you resonate with any of the below...
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">"I have been trying to learn Meta Ads since a long time, but I always get confused on budgets/campaigns"</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">"I don't understand how to manage & optimize campaigns/ad sets. Should I do ABO or CBO in 2025?"</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">"I tried interest targeting and laser targeting, but nothing works consistently. It is driving me crazy"</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">"I tried increasing the budget by 10-20%, but my ads stop performing as soon as I increase the budget"</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">"I'm sick of inconsistency in my ads performance. One day it's great, but the next day it is terrible"</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">"I don't know how to launch and scale my ad account, fast and with peace. I want an end-to-end system"</p>
              </div>
            </div>

            <div className="bg-adsmagnify-blue/10 p-8 rounded-2xl text-center">
              <p className="text-xl text-adsmagnify-blue font-semibold mb-4">
                If you said YES to any of the above, this program is a must attend for you 
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Clock className="h-6 w-6 text-adsmagnify-blue" />
                  <span className="text-lg font-semibold">4 Weeks:</span>
                  <span className="text-lg">Step-by-step training</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Calendar className="h-6 w-6 text-adsmagnify-blue" />
                  <span className="text-lg font-semibold">Next Batch:</span>
                  <span className="text-lg">27th October 2025</span>
                </div>

                <Button
                  size="lg"
                  className="bg-adsmagnify-blue hover:bg-adsmagnify-dark-blue text-white font-bold text-xl px-12 py-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 mb-4"
                  onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  JOIN NOW AT ₹9,999
                </Button>

                <div className="text-red-600 font-bold text-lg">
                  ⚠️ LIMITED SEATS AVAILABLE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Here's a quick recap */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Here's a quick recap of what you'll learn...
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">How to avoid audience overlap, auction overlap, and ad fatigue for a more stable ad performance</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">The ad scaling system we are using to spend 30K-50K per day on ad spend with peace</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Our proprietary Ad Testing Framework 1:1:3 and 1:1:2</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">The AMP Ad campaign launch framework</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">The future of Meta Ads interest-targeting to get the best ROI in 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-adsmagnify-dark-yellow lg:text-4xl font-bold mb-6">
              Ready to Transform Your Meta Ads Performance?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join the AdProfit Mastery Program and learn the system that's helping businesses scale to ₹50K+ per day with peace and profitability.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="h-6 w-6 text-adsmagnify-dark-yellow" />
                <span className="text-lg font-semibold">4 Weeks:</span>
                <span className="text-lg">Step-by-step training</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <Calendar className="h-6 w-6 text-adsmagnify-dark-yellow" />
                <span className="text-lg font-semibold">Next Batch:</span>
                <span className="text-lg">27th October 2025</span>
              </div>

              <Button
                size="lg"
                className="bg-adsmagnify-dark-yellow hover:bg-white text-adsmagnify-blue font-bold text-xl px-12 py-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 mb-4"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                JOIN NOW AT ₹9,999
              </Button>

              <div className="text-red-300 font-bold text-lg">
                ⚠️ LIMITED SEATS AVAILABLE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                Ready to Master Advanced Meta Ads Scaling?
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-adsmagnify-blue">Enquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-adsmagnify-blue focus:ring-adsmagnify-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email ID *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-adsmagnify-blue focus:ring-adsmagnify-blue"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-adsmagnify-blue focus:ring-adsmagnify-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Current Designation *</Label>
                      <Input
                        id="designation"
                        name="designation"
                        type="text"
                        required
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-adsmagnify-blue focus:ring-adsmagnify-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-adsmagnify-blue focus:ring-adsmagnify-blue"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-adsmagnify-blue hover:bg-adsmagnify-dark-blue text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    Submit Enquiry
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
