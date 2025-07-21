import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import notificationStore from "../../store/notification";
import { getLocalStorage } from "../../utils/localStorage";
import { useEffect } from "react";

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

  console.log("Notifications data:", data.content);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={24} />
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">
              {data.content ? data.content.length : 0}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="font-semibold text-sm mb-2">Thông báo</div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {data.content && data.content.length > 0 ? (
              data.content.map((notification: any) => (
                <div
                  key={notification?.id}
                  className="text-sm p-2 bg-gray-100 rounded"
                >
                  {notification?.message}
                </div>
              ))
            ) : (
              <div className="text-sm p-2 bg-gray-100 rounded">
                Không có thông báo mới
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Notification;
