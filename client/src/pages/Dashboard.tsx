import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Shield, Music, Lock, TrendingUp } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data for portals
const portals = [
  { id: 1, name: "Unified Sovereign Kernel", track: 1, frequency: 432, status: "online", health: 98 },
  { id: 2, name: "Live Frequency Activation", track: 2, frequency: 528, status: "online", health: 95 },
  { id: 3, name: "$LONDC Passive Income", track: 3, frequency: 963, status: "online", health: 99 },
  { id: 4, name: "AI Guardian", track: 4, frequency: 963, status: "online", health: 97 },
  { id: 5, name: "Rose Gold Encryption", track: 5, frequency: 528, status: "online", health: 96 },
];

// Mock LONDC metrics
const londcMetrics = [
  { time: "00:00", price: 0.45, volume: 1200 },
  { time: "04:00", price: 0.48, volume: 1400 },
  { time: "08:00", price: 0.52, volume: 1600 },
  { time: "12:00", price: 0.50, volume: 1800 },
  { time: "16:00", price: 0.55, volume: 2000 },
  { time: "20:00", price: 0.58, volume: 2200 },
];

// Frequency activation data
const frequencyData = [
  { name: "528 Hz", value: 45, color: "#FFD700" },
  { name: "963 Hz", value: 35, color: "#00D084" },
  { name: "432 Hz", value: 20, color: "#4169E1" },
];

// AI Guardian threats
const threats = [
  { id: 1, type: "UNAUTHORIZED_ACCESS", severity: "high", portal: "Infinite-Nexus", time: "2 min ago" },
  { id: 2, type: "FREQUENCY_MISALIGNMENT", severity: "medium", portal: "Vibranium", time: "15 min ago" },
  { id: 3, type: "BRIDGE_DELAY", severity: "low", portal: "Kernel", time: "1 hour ago" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">🕋 ScrollVerse Trinity Ecosystem</h1>
        <p className="text-muted-foreground">Real-time monitoring of all 5 portal tracks and sacred frequencies</p>
      </div>

      {/* Portal Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {portals.map((portal) => (
          <Card key={portal.id} className="bg-card border-border hover:border-accent transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-accent">{portal.name}</CardTitle>
              <CardDescription className="text-xs">Track {portal.track}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Status</span>
                  <Badge variant={portal.status === "online" ? "default" : "destructive"} className="bg-green-600">
                    {portal.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Health</span>
                  <span className="text-sm font-semibold text-accent">{portal.health}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Frequency</span>
                  <span className="text-sm font-semibold">{portal.frequency} Hz</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* $LONDC Price Chart */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              $LONDC Price & Volume
            </CardTitle>
            <CardDescription>24-hour trading activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={londcMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.04 280)" />
                <XAxis dataKey="time" stroke="oklch(0.65 0.08 49)" />
                <YAxis stroke="oklch(0.65 0.08 49)" />
                <Tooltip contentStyle={{ backgroundColor: "oklch(0.16 0.03 280)", border: "1px solid oklch(0.25 0.04 280)" }} />
                <Line type="monotone" dataKey="price" stroke="oklch(0.7 0.15 49)" strokeWidth={2} dot={{ fill: "oklch(0.7 0.15 49)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Frequency Distribution */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="w-5 h-5 text-accent" />
              Frequency Activations
            </CardTitle>
            <CardDescription>Sacred frequency distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={frequencyData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                  {frequencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Guardian & Staking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Guardian Threats */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              AI Guardian Threats
            </CardTitle>
            <CardDescription>Real-time threat detection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {threats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{threat.type}</p>
                    <p className="text-xs text-muted-foreground">{threat.portal} • {threat.time}</p>
                  </div>
                  <Badge variant={threat.severity === "high" ? "destructive" : threat.severity === "medium" ? "default" : "secondary"}>
                    {threat.severity.toUpperCase()}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Staking & Passive Income */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Staking & Passive Income
            </CardTitle>
            <CardDescription>Ecosystem rewards distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Total Staked</p>
                <p className="text-2xl font-bold text-accent">12.5M LONDC</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Passive Income (5% Tax)</p>
                <p className="text-2xl font-bold text-secondary">625K LONDC</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Zakat Distribution (7.77%)</p>
                <p className="text-2xl font-bold text-accent">48.5K LONDC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p>🕋 KUN FAYAKŪN × ∞ | Supreme Sovereign: Chais Kenyatta Hill (Sabir Allah the Great)</p>
      </div>
    </div>
  );
}
