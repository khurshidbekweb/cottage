import { useQuery } from "@tanstack/react-query";
import { cottageUtils } from "../utils/cottage.utils";
import { languageUtils } from "../utils/language.utils";
import { QUERY_KEYS } from "./query-keys";
import { placeUtils } from "../utils/place.utils";
import { regionUtils } from "../utils/region.utils";
import { comfortUtils } from "../utils/comfort.utils";
import { cottageTypeUtils } from "../utils/cottage-type.utils";
import { userUtils } from "../utils/user.utils";
import { notificationUtils } from "../utils/notification.utilis";
import { ServiceUtils } from "../utils/service.utils";
import { TariffUtils } from "../utils/tariff.utilis";

export const ALL_DATA = {
  useCottage: () => {
    const cottages = useQuery({
      queryKey: [QUERY_KEYS.cottages],
      queryFn: cottageUtils.getCottage,
    });

    const likedCottages = JSON.parse(localStorage.getItem("liked"));
    if (cottages.data?.length) {
      const data = cottages.data.map((e) => {
        if (likedCottages?.includes(e.id)) {
          return {
            ...e,
            isLiked: true,
          };
        } else {
          return {
            ...e,
            isLiked: false,
          };
        }
      });
      return { ...cottages, data: data };
    }
    return { ...cottages };
  },
  useCottageByPlace: (placeId) => {
    const cottages = useQuery({
      queryKey: [QUERY_KEYS.cottages_by_place],
      queryFn: async () => await cottageUtils.getCottageByPlace(placeId),
    });

    const likedCottages = JSON.parse(localStorage.getItem("liked"));
    if (cottages.data?.length) {
      const data = cottages.data.map((e) => {
        if (likedCottages?.includes(e.id)) {
          return {
            ...e,
            isLiked: true,
          };
        } else {
          return {
            ...e,
            isLiked: false,
          };
        }
      });
      return { ...cottages, data: data };
    }
    return { ...cottages };
  },
  useCottageFilter: ({ type, place, price }) => {
    const filters = useQuery({
      queryKey: [QUERY_KEYS.cottage_by_filter, type, place, price],
      queryFn: async () => {
        const data = await cottageUtils.getCottageFilter({
          type,
          place,
          price,
        });
        return data;
      },
    });

    const likedCottages = JSON.parse(localStorage.getItem("liked"));
    if (filters.data?.length) {
      const data = filters.data.map((e) => {
        if (likedCottages?.includes(e.id)) {
          return {
            ...e,
            isLiked: true,
          };
        } else {
          return {
            ...e,
            isLiked: false,
          };
        }
      });
      return { ...filters, data: data };
    }
    return { ...filters };
  },
  useCottageByType: (type) => {
    return useQuery({
      queryKey: [QUERY_KEYS.cottageType_by_Id],
      queryFn: async () => await cottageUtils.getCottageType(type),
    });
  },
  useCottageUserId: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.cottage_by_UserId],
      queryFn: cottageUtils.getCottageUser,
    });
  },
  useCottageAllUserId: (userId) => {
    const userCottage = useQuery({
      queryKey: [QUERY_KEYS.cottageUserAllId],
      queryFn: async () => await cottageUtils.getCottageUserId(userId),
    });

    const likedCottages = JSON.parse(localStorage.getItem("liked"));

    if (userCottage.data?.length) {
      const data = userCottage.data.map((e) => {
        if (likedCottages?.includes(e.id)) {
          return {
            ...e,
            isLiked: true,
          };
        } else {
          return {
            ...e,
            isLiked: false,
          };
        }
      });
      return { ...userCottage, data: data };
    }
    return { ...userCottage };
  },
  useLanguage() {
    return useQuery({
      queryKey: [QUERY_KEYS.languages],
      queryFn: languageUtils.getLanguage,
    });
  },
  usePlace() {
    return useQuery({
      queryKey: [QUERY_KEYS.places],
      queryFn: placeUtils.getPlace,
    });
  },
  useRegion() {
    return useQuery({
      queryKey: [QUERY_KEYS.regions],
      queryFn: regionUtils.getRegion,
    });
  },
  useComforts() {
    return useQuery({
      queryKey: [QUERY_KEYS.comforts],
      queryFn: comfortUtils.getComfort,
    });
  },
  useCottageType: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.cottageType],
      queryFn: cottageTypeUtils.getCottageType,
    });
  },
  useUsers: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.users],
      queryFn: userUtils.getUsers,
    });
  },
  useSingleUser: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.users],
      queryFn: userUtils.getSingleUser,
    });
  },
  useCottageUserById: (userID) => {
    return useQuery({
      queryKey: [QUERY_KEYS.userCottageUser],
      queryFn: async () => userUtils.getCottageUserById(userID),
    });
  },
  useNotificationUser: (userId) => {
    return useQuery({
      queryKey: [QUERY_KEYS.notification, userId],
      queryFn: async () => {
        const data = await notificationUtils.getUserNotification(userId);
        return data;
      },
    });
  },
  useAllNotification: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.all_notification],
      queryFn: async () => {
        const data = await notificationUtils.getNotification();
        return data;
      },
    });
  },
  useServices: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.services],
      queryFn: async () => {
        const data = await ServiceUtils.getService();
        return data;
      },
    });
  },
  useTariff: () => {
    return useQuery({
      queryKey: [QUERY_KEYS.tariff],
      queryFn: async () => {
        const data = await TariffUtils.getTariff();
        return data;
      },
    });
  },
};
