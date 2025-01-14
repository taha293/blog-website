'use client'
import {  Home,StickyNote} from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import ThemeToogle from "./themetoogle"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "All Blogs",
    url: "/#posts",
    icon: StickyNote,
  },
  {
    title: "Latest Blogs",
    url: "/#posts",
    icon: StickyNote,
  },
]

function AppSidebar() {
  return ( 
    <Sidebar side="right" >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#1087FF] font-bold text-[26px] my-3">
          <SidebarTrigger  className="md:hidden flex items-center"/>
            <span className="mx-auto">Giaic Blog</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="text-[#1087FF]">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}  className="hover:font-bold hover:text-[#1087FF]" >
                      <item.icon/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-[#1087FF]">
        <ThemeToogle/>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
