export const SEND_TUITION_PROS = "SEND_TUITION_PROS";

export function sendTuitionpRroposal(data) {
    alert('Proposal sent successfully!')
    return {
        type: SEND_TUITION_PROS,
        data
    }
}