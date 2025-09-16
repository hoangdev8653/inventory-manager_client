import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import notificationStore from "../../store/notification";
import { getLocalStorage } from "../../utils/localStorage";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Notification() {
  const { getNotificationByUser, data } = notificationStore();
  const user = getLocalStorage("user");

  useEffect(() => {
    const fetchNotifications = async () => {
      if (user) {
        await getNotificationByUser();
      }
    };
    fetchNotifications();
  }, []);

  const unread = data.content?.filter((n: any) => !n.read) || [];
  const read = data.content?.filter((n: any) => n.read) || [];

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={24} />
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">
              {unread.length}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="font-semibold text-sm mb-2">Thông báo</div>
          <Tabs defaultValue="unread" className="w-full">
            <TabsList className="flex w-full mb-2">
              <TabsTrigger value="unread" className="flex-1">
                Chưa đọc
              </TabsTrigger>
              <TabsTrigger value="read" className="flex-1">
                Đã đọc
              </TabsTrigger>
            </TabsList>
            <TabsContent value="unread">
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {unread.length > 0 ? (
                  unread.map((notification: any) => (
                    <div
                      key={notification?.id}
                      className="text-sm p-2 bg-blue-50 rounded"
                    >
                      {notification?.message}
                    </div>
                  ))
                ) : (
                  <div className="text-sm p-2 bg-gray-100 rounded">
                    Không có thông báo chưa đọc
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="read">
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {read.length > 0 ? (
                  read.map((notification: any) => (
                    <div
                      key={notification?.id}
                      className="text-sm p-2 bg-gray-100 rounded"
                    >
                      {notification?.message}
                    </div>
                  ))
                ) : (
                  <div className="text-sm p-2 bg-gray-100 rounded">
                    Không có thông báo đã đọc
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Notification;
