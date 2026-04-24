"use client";

import BookingDashboard from "./DashboardComponents/BookingDashboard";
import { withAuth, AuthUser } from "@/middleware/withAuth";

interface Props {
  user: AuthUser;
}

function Dashboard({ user }: Props) {
  return <BookingDashboard />;
}

Dashboard.noLayout = true;

export default withAuth(Dashboard);
