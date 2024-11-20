import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { router } from "@inertiajs/react";

export default function SearchSection() {
    const [search, setSearch] = useState("");
    function search_data(params) {
      router.visit(window.location.pathname+'?search='+search)
    }
    return (
        <Paper
            component="form"
            sx={{ p: "6px 4px", display: "flex", alignItems: "center" }}
        >
            <InputBase
                name="search"
                placeholder="Search Employee"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                autoFocus={true}
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
