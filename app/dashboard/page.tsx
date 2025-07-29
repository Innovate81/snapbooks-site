"use client"

import type * as React from "react"
import {
  BarChart3,
  FileText,
  Home,
  Moon,
  Sun,
  Upload,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  MoreHorizontal,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Navigation items
const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
  },
  {
    title: "Upload",
    url: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: BarChart3,
  },
]

// Mock data for recent uploads
const recentUploads = [
  {
    id: "1",
    filename: "financial_report_q4.pdf",
    status: "verified",
    uploadedAt: "2024-01-15 14:30",
    size: "2.4 MB",
  },
  {
    id: "2",
    filename: "invoice_batch_jan.xlsx",
    status: "processing",
    uploadedAt: "2024-01-15 13:45",
    size: "1.8 MB",
  },
  {
    id: "3",
    filename: "expense_receipts.zip",
    status: "error",
    uploadedAt: "2024-01-15 12:20",
    size: "5.2 MB",
  },
  {
    id: "4",
    filename: "bank_statement_dec.pdf",
    status: "verified",
    uploadedAt: "2024-01-15 11:15",
    size: "890 KB",
  },
  {
    id: "5",
    filename: "payroll_summary.csv",
    status: "verified",
    uploadedAt: "2024-01-15 10:30",
    size: "156 KB",
  },
]

function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r border-violet-200 dark:border-violet-800">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <FileText className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-violet-900 dark:text-violet-100">SnapBooks</span>
                  <span className="truncate text-xs text-violet-600 dark:text-violet-400">Document Management</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-violet-700 dark:text-violet-300">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="data-[active=true]:bg-violet-100 data-[active=true]:text-violet-900 dark:data-[active=true]:bg-violet-900 dark:data-[active=true]:text-violet-100"
                  >
                    <a href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="data-[state=open]:bg-violet-100 dark:data-[state=open]:bg-violet-900">
                  <Users className="size-4" />
                  <span>Account</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 hover:bg-violet-100 dark:hover:bg-violet-900"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: {
  title: string
  value: string
  description: string
  icon: React.ElementType
  trend?: "up" | "down"
}) {
  return (
    <Card className="border-violet-200 dark:border-violet-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</CardTitle>
        <Icon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
          {trend && <TrendingUp className={`h-3 w-3 ${trend === "up" ? "text-green-500" : "text-red-500"}`} />}
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function getStatusBadge(status: string) {
  switch (status) {
    case "verified":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Verified</Badge>
    case "processing":
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Processing</Badge>
    case "error":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Error</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-violet-200 dark:border-violet-800 px-4 bg-white dark:bg-gray-950">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 hover:bg-violet-100 dark:hover:bg-violet-900" />
            <div className="flex items-center gap-2">
              <div className="flex aspect-square size-6 items-center justify-center rounded bg-violet-600 text-white">
                <FileText className="size-3" />
              </div>
              <span className="font-semibold text-violet-900 dark:text-violet-100">SnapBooks</span>
            </div>
          </div>
          <DarkModeToggle />
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-900">
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back! Here's what's happening with your documents.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              title="Uploads This Month"
              value="1,247"
              description="+12% from last month"
              icon={Upload}
              trend="up"
            />
            <StatCard
              title="Verified %"
              value="94.2%"
              description="+2.1% from last month"
              icon={CheckCircle}
              trend="up"
            />
            <StatCard title="Errors" value="23" description="-8 from last month" icon={AlertCircle} />
          </div>

          {/* Recent Uploads Table */}
          <Card className="border-violet-200 dark:border-violet-800">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Recent Uploads</CardTitle>
              <CardDescription>Your most recent document uploads and their processing status.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-violet-200 dark:border-violet-800">
                    <TableHead className="text-gray-600 dark:text-gray-400">Filename</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Status</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Uploaded</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Size</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUploads.map((upload) => (
                    <TableRow key={upload.id} className="border-violet-200 dark:border-violet-800">
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                          {upload.filename}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(upload.status)}</TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {upload.uploadedAt}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">{upload.size}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Download</DropdownMenuItem>
                            <DropdownMenuItem>Reprocess</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
