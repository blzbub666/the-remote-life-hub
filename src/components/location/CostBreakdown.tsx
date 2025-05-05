
import { CityCostData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CostBreakdownProps {
  costData: CityCostData;
}

interface CostCategory {
  name: string;
  value: number;
  percentage?: number; // Add this to define the percentage property
  details: {
    name: string;
    value: number;
  }[];
}

export function CostBreakdown({ costData }: CostBreakdownProps) {
  const categories: CostCategory[] = [
    { 
      name: "Housing", 
      value: costData.housing.monthlyRent, 
      details: [
        { name: "Monthly Rent", value: costData.housing.monthlyRent },
        { name: "Utilities", value: costData.housing.utilities },
        { name: "Internet", value: costData.housing.internet }
      ]
    },
    { 
      name: "Food", 
      value: costData.food.monthlyExpense,
      details: [
        { name: "Grocery Budget", value: costData.food.groceries },
        { name: "Eating Out (per meal)", value: costData.food.mealOut }
      ]
    },
    { 
      name: "Transportation", 
      value: costData.transportation.monthlyExpense,
      details: [
        { name: "Public Transport", value: costData.transportation.publicTransport },
        { name: "Taxi (per ride)", value: costData.transportation.taxi }
      ]
    },
    { 
      name: "Entertainment", 
      value: costData.entertainment.monthlyExpense,
      details: [
        { name: "Coffee (per cup)", value: costData.entertainment.coffee },
        { name: "Beer (per pint)", value: costData.entertainment.beer }
      ]
    },
    { 
      name: "Coworking", 
      value: costData.coworking.monthlyMembership,
      details: [
        { name: "Monthly Membership", value: costData.coworking.monthlyMembership },
        { name: "Day Pass", value: costData.coworking.dayPass }
      ]
    }
  ];
  
  // Calculate percentages for visualization
  const total = costData.monthlyTotal;
  categories.forEach(cat => {
    cat.percentage = (cat.value / total) * 100;
  });
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost of Living Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-1">${costData.monthlyTotal}</div>
          <div className="text-sm text-muted-foreground">Total Monthly Cost</div>
        </div>
        
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{category.name}</span>
                <span>${category.value}</span>
              </div>
              <div className="h-3 w-full bg-muted overflow-hidden rounded-full">
                <div 
                  className="h-full bg-app-blue rounded-full"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <div className="mt-2 space-y-1">
                {category.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex justify-between text-sm text-muted-foreground">
                    <span>• {detail.name}</span>
                    <span>${detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-sm text-muted-foreground pt-4 border-t">
          <p>
            This cost breakdown represents average expenses for a single person. 
            Housing is based on a one-bedroom apartment in a typical area.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
