import Image from "next/image";
import Card from "../components/card";
import Counter from "../components/counter";

export default function About() {
  return (
    
<div className="grid gap-4">
  <Card
    title="Next.js"
    description="فریم‌ورکی برای ساخت اپلیکیشن‌های React"
  />
  <Card
    color="text-blue-600"
    title="Tailwind CSS"
    description="استایل‌دهی سریع با کلاس‌های آماده"
  />
  <Image
  src="/logo.png"
  alt="لوگوی سایت"
  width={120}
  height={120}
  className="mb-6 rounded-full"
/>

<div className="mt-6">
  <Counter />
</div>
</div>

  );
}