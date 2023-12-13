"use client";

import { HiExclamationCircle } from "react-icons/hi";
import {
  BadgeDelta,
  DeltaType,
  Flex,
  Icon,
  MultiSelect,
  MultiSelectItem,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import { useState } from "react";

export type Tutor = {
  name: string;
  hoursWorked: number;
  coursesTaught: string;
  attendedSessions: number;
  status: "absent" | "present";
};

export const salesPeople: Tutor[] = [
  {
    name: "Peter Doe",
    hoursWorked: 40,
    coursesTaught: "Math",
    attendedSessions: 20,
    status: "present",
  },
  {
    name: "Lena Whitehouse",
    hoursWorked: 35,
    coursesTaught: "English",
    attendedSessions: 15,
    status: "absent",
  },
  {
    name: "Phil Less",
    hoursWorked: 30,
    coursesTaught: "Science",
    attendedSessions: 10,
    status: "present",
  },
  {
    name: "John Camper",
    hoursWorked: 25,
    coursesTaught: "History",
    attendedSessions: 5,
    status: "absent",
  },
  {
    name: "Max Balmoore",
    hoursWorked: 20,
    coursesTaught: "Geography",
    attendedSessions: 2,
    status: "present",
  },
];


export default function Tutors() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: Tutor) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <>
    <div className="p-10 bg-gray">

      <div className="max-w-3xl mx-auto">

      
      <div >
        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
          <Title> Performance History </Title>
          <Icon
            icon={HiExclamationCircle}
            variant="simple"
            tooltip="Shows sales performance per employee"
          />
        </Flex>
      </div>
      
      <div className="flex space-x-2 justify-center p-7">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedNames}
          placeholder="Select Tutors..."
        >
          {salesPeople.map((item) => (
            <MultiSelectItem key={item.name} value={item.name}>
              {item.name}
            </MultiSelectItem>
          ))}
        </MultiSelect>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">hoursWorked</TableHeaderCell>
            <TableHeaderCell className="text-right">coursesTaught</TableHeaderCell>
            <TableHeaderCell className="text-right">attendedSessions</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.hoursWorked}</TableCell>
                <TableCell className="text-right">{item.coursesTaught}</TableCell>
                <TableCell className="text-right">{item.attendedSessions}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      </div>
      </div>
    </>
  );
}