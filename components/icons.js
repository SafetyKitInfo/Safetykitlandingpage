import { Box, Clock, CheckCircle, Calendar, FileText, Activity } from 'lucide-react';

export function IconKit(props) {
  return <Box {...props} size={28} strokeWidth={1.5} aria-hidden />;
}

export function IconSchedule(props) {
  return <Calendar {...props} size={28} strokeWidth={1.5} aria-hidden />;
}

export function IconReport(props) {
  return <FileText {...props} size={28} strokeWidth={1.5} aria-hidden />;
}

export function IconMedical(props) {
  return <Activity {...props} size={28} strokeWidth={1.5} aria-hidden />;
}

export function IconClock(props) {
  return <Clock {...props} size={20} strokeWidth={1.5} aria-hidden />;
}

export function IconCheck(props) {
  return <CheckCircle {...props} size={18} strokeWidth={1.6} aria-hidden />;
}
