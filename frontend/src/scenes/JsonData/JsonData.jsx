import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export const JsonData = ({
  _id,
  intensity,
  sector,
  topic,
  insight,
  region,
  country,
  relevance,
  pestle,
  source,
  title,
  likelihood,
}) => {
  // Add this at the beginning of your JsonData component
  console.log("Received Data:", {
    _id,
    intensity,
    sector,
    topic,
    insight,
    region,
    country,
    relevance,
    pestle,
    source,
    title,
    likelihood,
  });

  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]}>
          {intensity}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {Number(likelihood).toFixed(2)}
        </Typography>
        <Rating value={topic} readOnly />

        <Typography variant="body2">{topic}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Region: {region}</Typography>
          <Typography>Country: {country}</Typography>
          <Typography>Relevence: {relevance}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
