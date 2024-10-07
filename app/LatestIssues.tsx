import prisma from "@/prisma/client";
import { Flex, Table, TableRow } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "asc" },
    take: 5,
  });
  return (
    <Table.Root>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Flex>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <IssueStatusBadge status={issue.status} />
              </Flex>
              {issue.title}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default LatestIssues;
