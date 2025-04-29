"use client";

import * as React from "react";
import {
  ArrowDown,
  ArrowUp,
  Bell,
  CircleUserRound,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  FileText,
  GalleryVerticalEnd,
  LineChart,
  Link,
  LogOut,
  MessageSquareMore,
  MoreHorizontal,
  Settings2,
  Star,
  Trash,
  Trash2,
  UserRoundCog,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import { Input } from "./ui/input";
import { useAuth } from "../contexts/AuthContext";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Loading from "./Loading";

export function NavActions() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, loading, logout } = useAuth();

  React.useEffect(() => {
    setIsOpen(false);
  }, []);

  function getInitials(fullName: string): string {
    if (!fullName) return "";

    const names = fullName.trim().split(" ");
    if (names.length === 1) {
      return names[0][0].toUpperCase();
    }

    return names[0][0].toUpperCase() + names[1][0].toUpperCase();
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <Input placeholder="search anything"></Input>
      <ModeToggle></ModeToggle>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback>{user && getInitials(user.name)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent
          className="w-56 overflow-hidden rounded-lg p-0"
          align="end"
        >
          <Sidebar collapsible="none" className="bg-transparent">
            <div className="p-4 flex flex-col items-center justify-center text-center py-4">
              <Avatar>
                <AvatarFallback>
                  {user && getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              {user && <h2 className="font-bold text-md mt-2">{user.name}</h2>}
              {user && <small>{user.email}</small>}
            </div>
            <SidebarContent>
              <SidebarGroup className="border-b last:border-none">
                <SidebarGroupContent className="gap-0">
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <UserRoundCog></UserRoundCog>{" "}
                        <span>Account settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MessageSquareMore></MessageSquareMore>{" "}
                        <span>Leave a Feedback</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="border-b last:border-none">
                <SidebarGroupContent className="gap-0">
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={logout}
                        className="cursor-pointer text-red-700 hover:text-red-700"
                      >
                        <LogOut></LogOut> <span>Logout</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}
