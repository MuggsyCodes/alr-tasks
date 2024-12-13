import ThemeControl from "@/components/ui/ThemeControl";
import MyTasks from "@/components/main/MyTasks";
import Header from "@/components/main/Header";

export default function Home() {
  return (
    <div className="border border-black">
      <Header />
      <MyTasks />
    </div>
  );
}
