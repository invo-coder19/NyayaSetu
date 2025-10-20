import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { TrendingUp, Users, DollarSign, CheckCircle2, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Transparency = () => {
  const stateData = [
    { state: "Maharashtra", disbursed: 450, pending: 120 },
    { state: "Tamil Nadu", disbursed: 380, pending: 95 },
    { state: "Karnataka", disbursed: 320, pending: 78 },
    { state: "West Bengal", disbursed: 290, pending: 110 },
    { state: "Gujarat", disbursed: 260, pending: 65 },
  ];

  const reliefTypeData = [
    { name: "Medical Relief", value: 35, color: "hsl(221, 83%, 33%)" },
    { name: "Rehabilitation", value: 28, color: "hsl(158, 64%, 36%)" },
    { name: "Education Support", value: 20, color: "hsl(24, 95%, 53%)" },
    { name: "Legal Aid", value: 17, color: "hsl(199, 89%, 48%)" },
  ];

  const monthlyTrend = [
    { month: "Jan", amount: 450 },
    { month: "Feb", amount: 520 },
    { month: "Mar", amount: 580 },
    { month: "Apr", amount: 650 },
    { month: "May", amount: 720 },
    { month: "Jun", amount: 800 },
  ];

  const stats = [
    {
      label: "Total Cases",
      value: "12,547",
      change: "+15.3%",
      icon: Users,
      color: "bg-primary",
    },
    {
      label: "Funds Disbursed",
      value: "₹145.7 Cr",
      change: "+22.1%",
      icon: DollarSign,
      color: "bg-secondary",
    },
    {
      label: "Cases Resolved",
      value: "9,823",
      change: "+18.5%",
      icon: CheckCircle2,
      color: "bg-success",
    },
    {
      label: "Avg. Processing Time",
      value: "4.2 days",
      change: "-12.3%",
      icon: Clock,
      color: "bg-accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gradient-dashboard">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Transparency Hub
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Real-time public dashboard showing aggregated fund allocation, disbursement status, 
              and performance metrics across states and districts.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.change.startsWith('+') ? 'text-success' : 'text-accent'
                  }`}>
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* State-wise Distribution */}
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-6">State-wise Fund Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="state" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="disbursed" fill="hsl(158, 64%, 36%)" name="Disbursed" />
                  <Bar dataKey="pending" fill="hsl(24, 95%, 53%)" name="Pending" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Relief Type Distribution */}
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-6">Relief Type Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={reliefTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {reliefTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Monthly Trend */}
          <Card className="p-6 shadow-card mb-12">
            <h3 className="text-xl font-semibold mb-6">Monthly Disbursement Trend (in Lakhs)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="hsl(221, 83%, 33%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(221, 83%, 33%)", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Blockchain Ledger Preview */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-6">Recent Blockchain Transactions</h3>
            <div className="space-y-3">
              {[
                { hash: "0x7f3d...a2c1", amount: "₹2.5L", status: "Confirmed", time: "2 mins ago" },
                { hash: "0x9c2e...b4f7", amount: "₹1.8L", status: "Confirmed", time: "5 mins ago" },
                { hash: "0x4a1b...d3e9", amount: "₹3.2L", status: "Confirmed", time: "12 mins ago" },
                { hash: "0x6e5f...c7a4", amount: "₹2.1L", status: "Confirmed", time: "18 mins ago" },
              ].map((tx, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <div>
                      <div className="font-mono text-sm">{tx.hash}</div>
                      <div className="text-xs text-muted-foreground">{tx.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{tx.amount}</div>
                    <div className="text-xs text-success">{tx.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Transparency;
