import { MoreHorizontal, PackageIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useProjects } from "@/contexts/ProjectContext";
import { usePathname } from "next/navigation";

export function NavWorkspaces() {
  const { projects } = useProjects();
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {projects.slice(0, 5).map((project) => {
            const isActive = pathname === `/projects/${project.id}`;
            return (
              <div key={project.id}>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={`/projects/${project.id}`}>
                      <PackageIcon></PackageIcon>
                      <span>{project.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            );
          })}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
