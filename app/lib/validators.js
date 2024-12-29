import { z } from "zod";

// Username validation schema
export const usernameSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, underscores, and dashes"
    ),
});

// Day availability validation schema
export const daySchema = z
  .object({
    isAvailable: z.boolean(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isAvailable) {
        // Validate only when `isAvailable` is true
        return (
          data.startTime &&
          data.endTime &&
          data.startTime < data.endTime
        );
      }
      return true; // Skip validation if `isAvailable` is false
    },
    {
      message: "End time must be greater than start time",
      path: ["endTime"],
    }
  );

// Weekly availability schema with time gap validation
export const availabilitySchema = z.object({
  monday: daySchema,
  tuesday: daySchema,
  wednesday: daySchema,
  thursday: daySchema,
  friday: daySchema,
  saturday: daySchema,
  sunday: daySchema,
  timeGap: z
    .number()
    .min(0, "Time gap must be 0 or more minutes")
    .int("Time gap must be an integer"),
});

// Event validation schema
export const eventSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be 100 characters or less"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be 500 characters or less"),
  duration: z
    .number()
    .int("Duration must be an integer")
    .positive("Duration must be a positive number"),
  isPrivate: z.boolean(),
});

// Booking validation schema
export const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email("Invalid email format"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Time must be in HH:MM format"),
  additionalInfo: z.string().optional(),
});
