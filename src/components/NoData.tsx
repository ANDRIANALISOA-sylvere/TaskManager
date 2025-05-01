import { FileX2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function NoData() {
  return (
    <Alert>
        <FileX2 className="h-4 w-4 text-muted-foreground"></FileX2>
      <AlertTitle>No data found</AlertTitle>
      <AlertDescription>
        There are currently no data avaible in this section. Please ad new ones.
      </AlertDescription>
    </Alert>
  );
}
