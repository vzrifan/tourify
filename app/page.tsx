import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="bg-black h-screen flex items-center justify-center flex-col">
      <div className="bg-white h-1/2 flex flex-col items-center justify-center rounded-lg px-12 gap-y-4">
        <div className="text-black text-2xl font-bold">
          Tourify
        </div>
        <div>
          <Input placeholder="Username" className="w-56"/>
        </div>
        <div>
          <Input placeholder="Password" className="w-56"/>
        </div>
        <div>
          <Button className="w-56">Login</Button>
        </div>
        <div>
          Login using
        </div>
      </div>
    </div>
  )
}
