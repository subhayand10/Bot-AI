import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Star({value,setValue}) {
    const [readOnly, setReadOnly] = React.useState("")
  return (
    <Stack spacing={1}>
      {readOnly && (
        <Rating
          value={value}
          name={readOnly}
          readOnly
        />
      )}
      {!readOnly && (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setReadOnly("read-only");
          }}
        />
      )}
    </Stack>
  );
}
