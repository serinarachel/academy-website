"use client";

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

  const handleSubmit = (e: React.FormEvent) => {
    // FormSubmit.co will handle the submission and redirect
    // No need for preventDefault or async handling
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
              AdProfit Mastery Program (AMP)
              <span className="block text-adsmagnify-dark-yellow">(Powered by AI)</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Turn Your Meta Ads Into a Profit Machine — Scale Campaigns to ₹50 Lakhs+ With Confidence
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              The AdProfit Mastery Program (AMP) is a 4-phase advanced training designed for marketers, entrepreneurs, and freelancers who already have basic experience with Meta Ads and want to confidently scale their campaigns to higher spends while protecting ROI.
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
                <span className="text-lg">6th December 2025</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold text-sm">Offline/Online</span>
                </div>
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
              <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-6">
                Who is AMP For?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unlike basic ad trainings, AMP is profit-first — you'll learn how to structure, scale, and optimize campaigns that not only grow revenue but also safeguard your budget.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Business owners who want to scale ads without losing money</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Freelancers who want to deliver better results for clients</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Marketers who know campaign setup but struggle with scaling</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Anyone who has spent money on Meta Ads but can't crack consistent ROI</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400 max-w-2xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Pre-Requisite: You should have already run Meta Ads (basic knowledge required)</p>
                </div>
              </div>
            </div><br />

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
                        <span className="text-sm text-gray-600">6th December 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-adsmagnify-blue font-semibold text-sm">Offline/Online</span>
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
              <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-6">
                The 4 Phases of AMP
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive 4-phase advanced training designed to take you from basic Meta Ads knowledge to scaling campaigns to ₹50 Lakhs+ with confidence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Phase 1 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl">Phase: Profit Foundations</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Introduction to the Single-Campaign Profit System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Future-proofing ads with first-party vs. third-party data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Targeting strategies: Advantage+ vs. manual audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understanding the Meta Ad Auction for cheaper results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Attribution clarity with the Goalpost Tracking Method</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl">Phase: Campaign Launch & Setup</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The 5 Profit Variables that make or break campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The Creative Trio Formula – testing multiple creatives to find winners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The Focused Scaling Formula – doubling down with precision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Key KPIs that separate winners from losers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Launch SOPs for new ad accounts</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl">Phase: Scaling to ₹50 Lakhs+ Ad Spend</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Case study: Scaling campaigns to ₹50 Lakhs ad spend while staying profitable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Using the Ad Budget Optimizer Tool for data-driven scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>How & when to increase budgets without breaking performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The 10-Minute Daily Profit Routine for optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Morning & evening checklists for stable results</span>
                  </li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl">Phase: Creative Breakthroughs</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Why creatives decide whether a campaign scales or fails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The Creative Sprint Test – generate 10 ad ideas in 24 hours with minimum spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>5 different methods to test creatives effectively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Testing strategies for video, image, and carousel ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Case studies of high-performing ad creatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Bonuses Included
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Ad Scaling Calculator (plug-and-play budget planner)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">SOPs for creative testing, performance tracking & optimization</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Private AMP Community for peer support, Q&A, and updates</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Lifetime Access to the course material</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Bonus Sessions on Advertising Psychology & Scaling Playbooks</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Perform detailed competitor analysis using Gemini</p>
              </div>
            </div>

            <div className="bg-adsmagnify-blue/10 p-8 rounded-2xl text-center">
              <p className="text-xl text-adsmagnify-blue font-semibold mb-4">
                Duration & Format: 4 Phases (4 Weeks) – step-by-step training with access to private community for ongoing support
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
                  <span className="text-lg">6th December 2025</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-adsmagnify-blue font-semibold text-sm">Offline/Online</span>
                  </div>
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


      {/* Key Takeaways */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Key Takeaways from AMP
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Build campaigns with profit-first scaling systems</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Confidently scale campaigns up to ₹50 Lakhs ad spend</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Learn daily routines & checklists to keep results consistent</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Discover creative testing systems that reduce wasted ad spend</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-adsmagnify-blue rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Become an advanced Meta Ads specialist who can deliver results for businesses or clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-12 text-center">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">1. What's the difference between the Performance Marketing Course and the AdProfit Mastery Program (AMP)?</h3>
                <p className="text-gray-700 mb-2">The Performance Marketing Course is a basic-to-advance training that covers Meta Ads + Google Ads foundations. Perfect for beginners or those with up to 1 year of experience.</p>
                <p className="text-gray-700">The AdProfit Mastery Program (AMP) is an advanced scaling program for those who already run campaigns and want to learn how to confidently scale campaigns to ₹50 Lakhs+ ad spend while protecting ROI.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">2. Who should join the Performance Marketing Course?</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Beginners in digital marketing who want to start with paid ads</li>
                  <li>• Freelancers with 6–12 months of experience who want structured learning</li>
                  <li>• Business owners who want to learn how ads really work instead of outsourcing blindly</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">3. Who should join AMP?</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Marketers, freelancers, or agency owners already running Meta Ads</li>
                  <li>• People who know the basics but struggle with scaling beyond small budgets</li>
                  <li>• Those who want pro-level frameworks like the Single-Campaign Profit System, Creative Trio Formula, and Goalpost Tracking</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">4. I'm not sure if I'm beginner or advanced. How do I choose?</h3>
                <p className="text-gray-700 mb-2">If you've never run ads or only dabbled a little → Performance Marketing Course.</p>
                <p className="text-gray-700">If you've already run campaigns, spent money, and now want to scale profitably → AMP.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">5. Do I need technical skills before joining?</h3>
                <p className="text-gray-700">No. You just need a basic understanding of how digital ads work (which we also cover in the foundation modules). If you're completely new, start with the Performance Marketing Course.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">6. Will I get lifetime access?</h3>
                <p className="text-gray-700">Yes, you'll have lifetime access to all lessons, tools, and updates in both courses.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">7. Are there live sessions or is it pre-recorded?</h3>
                <p className="text-gray-700 mb-2">The Performance Marketing Course is a mix of structured lessons + live demo classes.</p>
                <p className="text-gray-700">AMP has recorded step-by-step training with live Q&A / strategy calls for scaling questions.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">8. Do you give certificates?</h3>
                <p className="text-gray-700">Yes. On completing either program, you'll receive a verified certificate from Adsmagnify that you can showcase on your LinkedIn / Resume / Portfolio.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">9. What support will I get if I'm stuck?</h3>
                <p className="text-gray-700">You'll get access to a private WhatsApp/Community group where you can ask questions, share campaigns, and get feedback. Plus, we conduct regular doubt-solving sessions.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">10. What results can I expect after joining?</h3>
                <p className="text-gray-700 mb-2">From the Performance Marketing Course: you'll be able to confidently set up, run, and optimize Meta + Google Ads campaigns for clients or your own business.</p>
                <p className="text-gray-700">From AMP: you'll master scaling strategies, creative testing systems, and optimization routines that allow you to manage large ad budgets with profitability.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">11. How much time do I need to commit weekly?</h3>
                <p className="text-gray-700 mb-2">Performance Marketing Course: 5–7 hours/week for 6–8 weeks.</p>
                <p className="text-gray-700">AMP: 3–4 hours/week for 4 weeks (plus daily 10-min optimization routines you'll learn).</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">12. What if I can't attend live sessions?</h3>
                <p className="text-gray-700">No, we don't sell recorded lectures.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">13. Can I pay in installments?</h3>
                <p className="text-gray-700">Yes. We offer EMI/payment plans for both courses to make it easier to join.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-navy-900 mb-3">14. Do you guarantee results?</h3>
                <p className="text-gray-700">We don't guarantee exact numbers (since results depend on your business, offer, and execution). But we guarantee that if you implement what's taught, you'll be able to run ads confidently, avoid common mistakes, and scale smarter than 90% of marketers out there.</p>
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
              Ready to Scale Your Meta Ads to ₹50 Lakhs+?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join the AdProfit Mastery Program (AMP) and learn the profit-first system that's helping businesses scale campaigns to ₹50 Lakhs+ ad spend with confidence and profitability.
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
                <span className="text-lg">6th December 2025</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold text-sm">Offline/Online</span>
                </div>
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
                <form 
                  action="https://formsubmit.co/vinay.h@adsmagnify.in" 
                  method="POST" 
                  target="_blank"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* FormSubmit.co configuration */}
                  <input type="hidden" name="_subject" value="New Enquiry from AMP Course Page of Website" />
                  <input type="hidden" name="_replyto" value="" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://adsmagnifyacademy.com/thank-you" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
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
