export function changeStatus (status) {
    switch(status) {
        case "done":
            return "bg-green-500";
        case "pending":
            return "bg-gray-500";
        case "in_progress":
            return "bg-yellow-500 text-black!";
    }
}