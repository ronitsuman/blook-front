import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mockSpaces = [
  {
    id: "space1",
    name: "Infinity Mall Hoarding",
    location: "Andheri West, Mumbai",
    submittedBy: "Agent Ronit",
    status: "pending",
  },
  {
    id: "space2",
    name: "City Mall Banner",
    location: "Patna Junction",
    submittedBy: "Agent Ankit",
    status: "pending",
  },
]

export default function AdminSpaces() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Pending Spaces for Approval</h2>

      {mockSpaces.map(space => (
        <Card key={space.id} className="shadow-md">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{space.name}</h3>
                <p className="text-sm text-gray-600">{space.location}</p>
                <p className="text-sm text-gray-500 mt-1">Submitted by: <strong>{space.submittedBy}</strong></p>
              </div>
              <div className="flex gap-2">
                <Button variant="default">Approve</Button>
                <Button variant="outline">Reject</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
