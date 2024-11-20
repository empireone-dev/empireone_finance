import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { router } from "@inertiajs/react";
import { useEffect } from "react";
import dayjs from "dayjs";
import moment from "moment";

export default function DateRangeSection() {
    const [data, setData] = React.useState({
        start_at: "",
        end_at: "",
    });
    const urls = window.location.href;
    const parsedUrl = new URL(urls);
    const page = parsedUrl.searchParams.get("page") ?? "1";
    const status = parsedUrl.searchParams.get("status");
    const start_at = parsedUrl.searchParams.get("start_at");
    const end_at = parsedUrl.searchParams.get("end_at");

    useEffect(() => {
        setData({
            start_at: start_at??dayjs(moment().format("YYYY-MM-DD")),
            end_at: end_at??dayjs(moment().add(7, 'days').format("YYYY-MM-DD")),
        });
    }, []);

    function search_date(newValue) {
        const queryParams = new URLSearchParams({
            page,
            status,
            start_at: newValue[0]?.format("YYYY-MM-DD") ?? "",
            end_at: newValue[1]?.format("YYYY-MM-DD") ?? "",
        });

        router.visit(`${window.location.pathname}?${queryParams.toString()}`);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {data.start_at && data.end_at && (
                <DemoContainer components={["DateTimeRangePicker"]}>
                    <DateRangePicker
                        defaultValue={[
                            dayjs(data.start_at),
                            dayjs(data.end_at),
                        ]}
                        slots={{ field: SingleInputDateRangeField }}
                        name="allowedRange"
                        localeText={{
                            start: "Start-At",
                            end: "End-At",
                        }}
                        onAccept={(newValue) => search_date(newValue)}
                    />
                </DemoContainer>
            )}
        </LocalizationProvider>
    );
}
