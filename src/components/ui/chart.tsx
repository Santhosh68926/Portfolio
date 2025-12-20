"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipProps, LegendProps } from "recharts"

import { cn } from "@/lib/utils"

/* ---------------- THEME ---------------- */

const THEMES = { light: "", dark: ".dark" } as const

/* ---------------- TYPES ---------------- */

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

type ChartPayload = {
  name?: string
  value?: number | string
  dataKey?: string
  color?: string
  payload?: Record<string, any>
}

/* ---------------- CONTEXT ---------------- */

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

/* ---------------- CONTAINER ---------------- */

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

/* ---------------- STYLE ---------------- */

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([, item]) => item.color || item.theme
  )

  if (!colorConfig.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart="${id}"] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color
    return color ? `  --color-${key}: ${color};` : ""
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

/* ---------------- TOOLTIP ---------------- */

export const ChartTooltip = RechartsPrimitive.Tooltip

type ChartTooltipContentProps = {
  active?: boolean
  payload?: ChartPayload[]
  label?: React.ReactNode
  className?: string
  indicator?: "line" | "dot" | "dashed"
  hideLabel?: boolean
  hideIndicator?: boolean
  labelFormatter?: (label: any, payload: any[]) => React.ReactNode
  labelClassName?: string
  formatter?: (
    value: any,
    name: any,
    item: any,
    index: number,
    payload: any
  ) => React.ReactNode
  color?: string
  nameKey?: string
  labelKey?: string
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: ChartTooltipContentProps) {
  const { config } = useChart()

  if (!active || !payload || payload.length === 0) return null

  const tooltipLabel = (() => {
    if (hideLabel) return null
    if (labelFormatter) return labelFormatter(label, payload)
    return <div className={cn("font-medium", labelClassName)}>{label}</div>
  })()

  return (
    <div
      className={cn(
        "border bg-background rounded-lg p-2 text-xs shadow-xl",
        className
      )}
    >
      {tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = config[key]
          const indicatorColor = color || item.color

          return (
            <div key={index} className="flex items-center gap-2">
              {!hideIndicator && (
                <span
                  className="h-2 w-2 rounded"
                  style={{ backgroundColor: indicatorColor }}
                />
              )}
              <span className="text-muted-foreground">
                {itemConfig?.label || item.name}
              </span>
              <span className="ml-auto font-mono">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ---------------- LEGEND ---------------- */

export const ChartLegend = RechartsPrimitive.Legend

type ChartLegendContentProps = {
  payload?: ChartPayload[]
  verticalAlign?: "top" | "bottom"
  className?: string
  hideIcon?: boolean
  nameKey?: string
}

export function ChartLegendContent({
  payload,
  verticalAlign = "bottom",
  className,
  hideIcon = false,
  nameKey,
}: ChartLegendContentProps) {
  const { config } = useChart()

  if (!payload || payload.length === 0) return null

  return (
    <div
      className={cn(
        "flex justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, index) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = config[key]

        return (
          <div key={index} className="flex items-center gap-1.5">
            {!hideIcon && (
              <span
                className="h-2 w-2 rounded"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label || item.name}
          </div>
        )
      })}
    </div>
  )
}

/* ---------------- EXPORTS ---------------- */

export {
  ChartContainer,
  ChartStyle,
}
