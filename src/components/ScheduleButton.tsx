import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

export default function ScheduleButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild>
          <span>Réserver une séance !</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg h-[90%] md:max-h-[700px] p-0 pt-12">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ38qRfcYE2DeZUk9btg9ToOq8jUxwv1Y3nTmvyfn2Fjm3H6Mux_UNNRfLta0PJqcA-6KhyAwIwk?gv=true"
          width="100%"
          height="100%"
          className="border-t outline-none"
        ></iframe>
      </DialogContent>
    </Dialog>
  )
}
