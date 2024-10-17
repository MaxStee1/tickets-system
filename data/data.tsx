import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Soporte",
  },
  {
    value: "documentation",
    label: "Misc.",
  },
]

export const statuses = [
  {
    value: "todo",
    label: "Pendiente",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "En progreso",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Listo",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Cancelado",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Baja",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Media",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "Alta",
    value: "high",
    icon: ArrowUpIcon,
  },
]
