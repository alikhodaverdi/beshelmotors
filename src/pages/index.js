import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

export default function Home() {
  const data = [
    {
      label: "نگاشت ارز",
      value: "نگاشت ارز",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "نگاشت واحد سنجش",
      value: "نگاشت واحد سنجش",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "نگاشت کالا/خدمت",
      value: "نگاشت کالا/خدمت",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "نگاشت طرف حساب",
      value: "نگاشت طرف حساب",
      desc: `یک متن تست`,
    },
  ];

  return (
    <>
      <section>
        <h1>تنظیمات نرم افزار</h1>
        <div>
          <div>تاریخ</div>
          <input type="date"></input>
        </div>
        <div className="border">
          <div>ارسال مستقیم اطلاعات به سامانه</div>
          <div>
            <div>آدرس وب سرویس : </div>
            <input type="text" className="bg-gray-400"></input>
          </div>
          <div>
            <div>نسخه وب سرویس : </div>
            <input type="text" className="bg-gray-400"></input>
          </div>
          <div>
            <div>شناسه یکتای حافظه مالیاتی :</div>
            <input type="text" className="bg-gray-400"></input>
          </div>
          <div>
            <div>کلید خصوصی</div>
            <input type="text" className="bg-gray-400"></input>
          </div>
        </div>
      </section>
      <section>
        <h1>تنظیمات سامانه مودیان</h1>
        <Tabs value="html">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </section>
    </>
  );
}
