"use client";

import { useState } from "react";
import { Dot } from "lucide-react";
import { BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
// data coming from /lib/data file.
import { tiers } from "@/libs/data";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      {/* Tabs to switch between monthly and annually pricing. */}
      <Tabs defaultValue="monthly" className="w-full mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
          <TabsTrigger
            value="monthly"
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="annually"
            onClick={() => setBillingCycle("annually")}
          >
            Annually
          </TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <p className="text-center text-muted-foreground mt-2">
            Pay month-to-month
          </p>
        </TabsContent>
        <TabsContent value="annually">
          <p className="text-center text-muted-foreground mt-2">
            Save with annual billing
          </p>
        </TabsContent>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tiers.map((tier) => (
          // top level card to render the details of each pricing tier.
          <Card
            key={tier.name}
            className={`flex flex-col ${
              tier.name === "Booster"
                ? "bg-gradient-to-b from-[#1D419C] via-[#153172] to to-[#0B193C]"
                : ""
            } `}
          >
            <CardHeader className={tier.name === "Booster" ? "text-white" : ""}>
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <CardTitle className="text-3xl font-bold">
                {billingCycle === "monthly"
                  ? tier.monthlyPrice
                  : tier.annualPrice}
                {tier.monthlyPrice !== "Contact Us" &&
                  tier.monthlyPrice !== "Try now" && (
                    <span className="text-lg text-[#6B7280] font-semibold ml-1">
                      {billingCycle === "monthly" ? "/month" : "/year"}
                    </span>
                  )}
              </CardTitle>
              {tier.badge ? (
                <CardDescription>
                  <Badge className="bg-[#ECFEF3] text-[#047A48] mr-2">
                    <BadgePercent className="text-[#12B76A] h-3 w-3 mr-1" />
                    {tier.badge}
                  </Badge>
                  <span className="text-xl font-bold line-through text-muted-foreground text-[#6B7280]">
                    {billingCycle === "monthly"
                      ? tier.originalMonthlyPrice
                      : tier.originalAnnualPrice}
                  </span>
                </CardDescription>
              ) : (
                ""
              )}
            </CardHeader>
            {/* Section for rendering the features associated with each tier of pricing. */}
            <CardContent
              className={`flex-grow flex flex-col ${
                tier.name === "Booster" ? "text-white" : ""
              }`}
            >
              <div className="flex-grow">
                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle
                        className={`h-5 w-5 mr-2 flex-shrink-0 ${
                          tier.name === "Booster"
                            ? "text-white"
                            : "text-primary"
                        }`}
                      />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator className="my-4" />
              <div>
                <ul className="space-y-2">
                  {tier.features2.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Dot className="h-7 w-7 text-primary mr-2 flex-shrink-0" />
                      <span
                        className={`text-lg text-[#6B7280] font-semibold ${
                          tier.name === "Booster"
                            ? "text-white"
                            : "text-[#6B7280]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              {/* Continue button. */}
              <Button
                className={`w-full ${
                  tier.name === "Booster"
                    ? "bg-white text-black hover:bg-blue-50"
                    : "bg-[#1A56DB] hover:bg-blue-600"
                }`}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
