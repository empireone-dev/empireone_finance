import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link } from "@inertiajs/react";

export default function DashboardCardSection() {
    const { dashboards } = useSelector((store) => store.dashboards);
    console.log("dashboards", dashboards);
    return (
        <div className="grid grid-cols-1 gap-4 px-2 mt-4 sm:grid-cols-4">
            <Card variant="outlined">
                <CardComponent
                    title="Pending"
                    href="/administrator/pending"
                    count={dashboards.pending}
                />
            </Card>
            <Card variant="outlined">
                <CardComponent
                    title="Approved"
                    href="/administrator/approved"
                    count={dashboards.approved}
                />
            </Card>
            <Card variant="outlined">
                <CardComponent
                    title="Released"
                    href="/administrator/remaining_loan_records?page=1&status=Remaining"
                    count={dashboards.released}
                />
            </Card>
            <Card variant="outlined">
                <CardComponent
                    title="Declined"
                    href="/administrator/declined"
                    count={dashboards.declined}
                />
            </Card>
        </div>
    );
}

function CardComponent({ title, count, href }) {
    return (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1">Total {count}</Typography>
            </CardContent>
            <CardActions className="w-full items-center justify-end">
                <Link href={href}>
                    <Button size="small">Show More</Button>
                </Link>
            </CardActions>
        </React.Fragment>
    );
}
