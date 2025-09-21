import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, IndianRupee } from "lucide-react";

const SpecialCourseBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-adsmagnify-blue via-adsmagnify-dark-blue to-adsmagnify-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">


                <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold leading-tight">
                  AdProfit Mastery Program
                  <span className="block text-adsmagnify-dark-yellow">(Powered by AI)</span>
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-semibold text-sm">Offline/Online</span>
                  </div>
                </div>

                <p className="text-xl text-gray-200 leading-relaxed">
                  Turn Your Meta Ads Into a Profit Machine — Scale Campaigns to ₹50 Lakhs+ With Confidence
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Target className="h-5 w-5 text-adsmagnify-dark-yellow" />
                    <span className="font-semibold">Advanced Scaling</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <IndianRupee className="h-5 w-5 text-adsmagnify-dark-yellow" />
                    <span className="font-semibold">₹50L+ Ad Spend</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-adsmagnify-dark-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    <Link href="/adprofit-mastery-program" className="flex items-center gap-2">
                      Learn More About AMP
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-adsmagnify-dark-yellow mb-4">What You'll Master:</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-adsmagnify-dark-yellow rounded-full"></div>
                      <span>Single-Campaign Profit System</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-adsmagnify-dark-yellow rounded-full"></div>
                      <span>Creative Trio Formula</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-adsmagnify-dark-yellow rounded-full"></div>
                      <span>Goalpost Tracking Method</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-adsmagnify-dark-yellow rounded-full"></div>
                      <span>10-Minute Daily Profit Routine</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-adsmagnify-dark-yellow rounded-full"></div>
                      <span>Ad Budget Optimizer Tool</span>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-adsmagnify-dark-yellow/20 rounded-lg border border-adsmagnify-dark-yellow/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-adsmagnify-dark-yellow mb-1">₹9,999</div>
                      <div className="text-sm text-gray-300">Regular Price</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialCourseBanner;
