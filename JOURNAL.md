Day1: 
        So i started this project after long time and i am happy with this.

        Now today i have make file structure as well as write some code. 

Purpose of files and folders which i have added:
    Frontend: This folder have all things related to Ui/Ux and ohter things.
        -> Src:
            -> components: resusable UI(i can use this on multiple place)
                    -> common: i will use 
            -> pages: Screen-level pages
            -> routes: route definitions
            -> context: auth and theme
            -> services: API calls
            -> utils: helpers

So the first issue came as in form of tailwind. It realy hard to find bcz in tailwind i am usig postcss.
So the issue is that i am using the older version code in index.css @tailwind and other things but what i have to do is in new version it import@tailwind. 
The older version   @tailwind base;
                    @tailwind components;
                    @tailwind utilities; 
Now the new version is @import "tailwindcss";

Day2: I forget to write the Journal.
Day3: Actualy it was Saturday and i enjoy my weekend by sleeping whole day and at night i just go through how much work i did in this and how much i have to and which files  reqired to work. 

Day4:
        first issue in StatCard: 
                                // export default function StatCard(title,value,subtitle){
                                //     return (
                                //         <div className="br-white dark:bg-slate-800 rounded-xl p-5 shadow-md hover:shadow-lg transition">
                                //             <h4 className="text-sm text-gray-500 dark:text-gray-400">{title}</h4>
                                //             <p className="text-3x1 font-bold text-gray-500 dark:text-gray-800 dark:text-white mt-2">{value}</p>
                                //             <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
                                //         </div>
                                //     )
                                // }

        So the issue in (title,value,subtitle) but is have to make them keys not plain text or obejct so i have to write them inside {}.
Day5:
        I start working on this project after having my dinner and i am really tired but i have to do this. Todays target to inhance the CLub page of Student page.