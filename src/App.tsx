import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Badge } from "./components/ui/badge"
import { Progress } from "./components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { 
  Search, 
  Bell, 
  Home, 
  Users, 
  FileText, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Settings,
  ChevronDown,
  MoreHorizontal,
  Circle
} from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'

const metricsData = [
  { title: "Total revenue", value: "$53,00889", icon: "💰", color: "bg-purple-100", iconBg: "bg-purple-500" },
  { title: "Total projects", value: "95", subtitle: "/100", icon: "📊", color: "bg-orange-100", iconBg: "bg-orange-500" },
  { title: "Total hour", value: "1022", subtitle: "/1200 hrs", icon: "⏰", color: "bg-blue-100", iconBg: "bg-blue-500" },
  { title: "Total team", value: "101", subtitle: "/120", icon: "👥", color: "bg-yellow-100", iconBg: "bg-yellow-500" }
]

const projectData = [
  { name: "Character development", manager: "Nathaniel", date: "May 20, 2023", status: "In progress", progress: 85 },
  { name: "Cinematic Art app", manager: "Nathaniel mandala", date: "Jun 20, 2023", status: "Review", progress: 90 },
  { name: "Mobile phone branding", manager: "Timothy jonas", date: "July 15, 2023", status: "In progress", progress: 75 },
  { name: "Film and Entertainment", manager: "Marlee Harmony", date: "Dec 20, 2023", status: "Done", progress: 100 },
  { name: "Website builder development", manager: "Nathaniel Ray", date: "Nov 5, 2024", status: "In progress", progress: 45 }
]

const pieChartData = [
  { name: "Progress", value: 72, fill: "#ff6b35" },
  { name: "Remaining", value: 28, fill: "#e5e5eb" }
]

const workloadData = [
  { day: "Mon", hours: 8 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 7 },
  { day: "Thu", hours: 9 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 3 }
]

function App() {
  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: FileText, label: "Projects" },
    { icon: Users, label: "Team" },
    { icon: Calendar, label: "Time log" },
    { icon: BarChart3, label: "Resource report" },
    { icon: Users, label: "Users" },
    { icon: Settings, label: "Project settings" },
    { icon: MessageSquare, label: "Messaging" }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold">Promage</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback className="bg-orange-500">CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">Chelsea name</div>
              <div className="text-xs text-gray-400">Product designer</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Overview</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search for anything..." 
                  className="pl-9 w-80 bg-gray-50 border-gray-200"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/api/placeholder/32/32" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-700">Alex martin</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top right date indicator */}
            <div className="flex justify-end">
              <div className="text-sm text-gray-500">Last 30 days</div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metricsData.map((metric, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`w-12 h-12 rounded-full ${metric.color} flex items-center justify-center mb-4`}>
                          <div className={`w-8 h-8 rounded-full ${metric.iconBg} flex items-center justify-center text-white text-sm`}>
                            {metric.icon}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        {metric.subtitle && (
                          <div className="text-sm text-gray-500">{metric.subtitle}</div>
                        )}
                        <div className="text-sm text-gray-500 mt-1">{metric.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Project Summary Table */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Project summary</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Select defaultValue="project">
                          <SelectTrigger className="w-24 h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project">Project</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="manager">
                          <SelectTrigger className="w-32 h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manager">Project manager</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="status">
                          <SelectTrigger className="w-20 h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="status">Status</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="text-xs text-gray-500">All</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs font-medium text-gray-500">Name</TableHead>
                          <TableHead className="text-xs font-medium text-gray-500">Project manager</TableHead>
                          <TableHead className="text-xs font-medium text-gray-500">Due date</TableHead>
                          <TableHead className="text-xs font-medium text-gray-500">Status</TableHead>
                          <TableHead className="text-xs font-medium text-gray-500">Progress</TableHead>
                          <TableHead className="w-10"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projectData.map((project, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium text-sm">{project.name}</TableCell>
                            <TableCell className="text-sm text-gray-600">{project.manager}</TableCell>
                            <TableCell className="text-sm text-gray-600">{project.date}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={project.status === 'Done' ? 'default' : project.status === 'Review' ? 'secondary' : 'outline'}
                                className={`text-xs ${
                                  project.status === 'Done' ? 'bg-green-100 text-green-700 border-green-200' :
                                  project.status === 'Review' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                  'bg-orange-100 text-orange-700 border-orange-200'
                                }`}
                              >
                                {project.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Progress value={project.progress} className="w-16 h-2" />
                                <span className="text-xs text-gray-500">{project.progress}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Progress Chart */}
              <div className="space-y-6">
                {/* Overall Progress */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Overall Progress</CardTitle>
                      <div className="text-xs text-gray-500">All</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-4">
                      <ResponsiveContainer width={120} height={120}>
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={55}
                            startAngle={90}
                            endAngle={450}
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">72%</div>
                      <div className="text-sm text-gray-500">Progress</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold">95</div>
                        <div className="text-xs text-gray-500">Done</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">26</div>
                        <div className="text-xs text-gray-500">In Progress</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">95</div>
                        <div className="text-xs text-gray-500">To Do</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">36</div>
                        <div className="text-xs text-gray-500">In Review</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Workload */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Projects Workload</CardTitle>
                      <div className="text-xs text-gray-500">Last 7 months</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={120}>
                      <BarChart data={workloadData}>
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <YAxis hide />
                        <Bar dataKey="hours" fill="#ff6b35" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Section - Today Task */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Today task</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">All</Badge>
                      <Badge variant="outline" className="text-xs">Important</Badge>
                      <Badge variant="outline" className="text-xs">Notes</Badge>
                      <Badge variant="outline" className="text-xs">Links</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { task: "Create a new flow of social application design", status: "completed", priority: "medium" },
                      { task: "Create a new flow of social application design", status: "completed", priority: "high" },
                      { task: "Landing page design for Bitbee project", status: "pending", priority: "high" },
                      { task: "Interactive prototype for big screen of alternative project", status: "pending", priority: "medium" },
                      { task: "Interactive prototype for big screen of alternative project", status: "pending", priority: "low" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 py-2">
                        <Circle className={`w-4 h-4 ${item.status === 'completed' ? 'fill-green-500 text-green-500' : 'text-gray-300'}`} />
                        <span className={`text-sm flex-1 ${item.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                          {item.task}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            item.priority === 'high' ? 'border-red-200 text-red-700 bg-red-50' :
                            item.priority === 'medium' ? 'border-orange-200 text-orange-700 bg-orange-50' :
                            'border-gray-200 text-gray-600 bg-gray-50'
                          }`}
                        >
                          {item.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Team Members Dots Display */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-3">
                    {Array.from({ length: 35 }, (_, i) => (
                      <div 
                        key={i} 
                        className={`w-8 h-8 rounded-full ${
                          i % 5 === 0 ? 'bg-orange-500' :
                          i % 7 === 0 ? 'bg-gray-800' :
                          i % 3 === 0 ? 'bg-gray-600' :
                          'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App