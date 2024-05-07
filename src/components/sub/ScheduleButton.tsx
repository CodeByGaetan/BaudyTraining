import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

export default function ScheduleButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild>
          <span>Réserver une séance !</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg h-[90%] md:max-h-[800px] p-0 pt-12 overflow-hidden">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kbXq5LyQS6TdCKEtAgVrlhOPiaQoUbn1vBxU9PFXoVmNnKBZjAkv43c7oV1Tggx1y26nzrKzl"
          width="100%"
          height="100%"
          className="border-t outline-none"
        ></iframe>
      </DialogContent>
    </Dialog>
  )
}
