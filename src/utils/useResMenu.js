import { useEffect, useState } from "react";
import { MENU_API } from "./constanst";

 export const useResMenu= (resId) => {
      const [resInfo, setResInfo] = useState(null);

                    useEffect(() => {
                        fetchMenu();
                    }, []);
                    
                    const fetchMenu = async () => {
                        const data = await fetch(MENU_API + resId);
                        const json = await data.json();
                    
                        setResInfo(json.data);
                    };

      return resInfo;

}