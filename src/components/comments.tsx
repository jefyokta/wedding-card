import { Screen } from "@/components/screen"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"

interface WeddingComment {
    id: number
    name: string
    comment: string
    created_at: string | null
    updated_at: string | null
}

type WeddingCommentResponse = WeddingComment[]

export const Comments = () => {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState<WeddingCommentResponse>([])
    const [loading, setLoading] = useState(false)

    const fetchComments = () => {
        fetch("https://jepi.blogwira.my.id/api/wedding", {
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then((data: WeddingCommentResponse) => {
                setComments(data)
            })
            .catch(() => {
            })
    }

    useEffect(() => {
        fetchComments()
    }, [])

    const submit = () => {
        if (!name.trim() || !comment.trim()) return

        setLoading(true)

        fetch("https://jepi.blogwira.my.id/api/wedding", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                comment,
            }),
        })
            .then(() => {
                setName("")
                setComment("")
                fetchComments()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Screen className="p-6 space-y-10 flex flex-col">
            <div className="flex justify-center">
                <div className="max-w-max text-center space-y-2">
                    <h2 className="text-white text-5xl tangerine-bold">
                        Ucapan & Doa
                    </h2>
                    <Separator />
                </div>
            </div>

            <div className="max-w-xl mx-auto space-y-4 bg-white/5 p-6 border border-white/20 rounded-2xl">
                <input
                    placeholder="Nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none"
                />

                <textarea
                    placeholder="Tulis ucapan dan doa..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none resize-none"
                />

                <button
                    onClick={submit}
                    disabled={loading}
                    className="w-full bg-white text-[#000035] rounded-full py-3 font-medium disabled:opacity-50"
                >
                    {loading ? "Mengirim..." : "Kirim Ucapan"}
                </button>
            </div>

            <div className="w-full  space-y-4 flex-1 overflow-scroll">
                {comments.length === 0 && (
                    <p className="text-white/60 text-center">
                        Belum ada ucapan 🌸
                    </p>
                )}

                {comments.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-md"
                    >
                     

                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
                                {item.name.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <p className="text-white font-medium leading-none">
                                    {item.name}
                                </p>
                                {item.created_at && (
                                    <p className="text-white/40 text-xs mt-1">
                                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                )}
                            </div>
                        </div>

                        <p className="text-white/85 leading-relaxed italic pl-1">
                            {item.comment}
                        </p>
                    </div>
                ))}

            </div>
        </Screen>
    )
}
