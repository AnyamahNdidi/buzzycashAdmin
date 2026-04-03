"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Pencil, Trash2, X, Check } from "lucide-react"

type Country = "nigeria" | "ghana"

interface Level {
  id: number
  name: string
  bgColor: string
  referralRange: string
  reward: string
}

interface Props {
  selectedCountry: Country
}

const initialLevels: Record<Country, Level[]> = {
  nigeria: [
    { id: 1, name: "Bronze Level", bgColor: "bg-amber-700", referralRange: "1-20 referrals", reward: "₦500 reward" },
    { id: 2, name: "Silver Level", bgColor: "bg-gray-400", referralRange: "20-50 referrals", reward: "₦1000 reward" },
    { id: 3, name: "Gold Level", bgColor: "bg-yellow-500", referralRange: "50-100 referrals", reward: "₦2000 reward" },
  ],
  ghana: [
    { id: 1, name: "Bronze Level", bgColor: "bg-amber-700", referralRange: "1-10 referrals", reward: "GHS 50 reward" },
    { id: 2, name: "Silver Level", bgColor: "bg-gray-400", referralRange: "10-30 referrals", reward: "GHS 100 reward" },
    { id: 3, name: "Gold Level", bgColor: "bg-yellow-500", referralRange: "30-60 referrals", reward: "GHS 200 reward" },
  ],
}

const levelIcons: Record<string, string> = {
  "Bronze Level": "🥉",
  "Silver Level": "🥈",
  "Gold Level": "🥇",
}

export default function ReferralLevels({ selectedCountry }: Props) {
  const [levels, setLevels] = useState<Level[]>(initialLevels[selectedCountry])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editValues, setEditValues] = useState<Partial<Level>>({})
  const [showAddForm, setShowAddForm] = useState(false)
  const [newLevel, setNewLevel] = useState({ name: "", referralRange: "", reward: "" })

  const handleEdit = (level: Level) => {
    setEditingId(level.id)
    setEditValues({ ...level })
  }

  const handleSaveEdit = (id: number) => {
    setLevels(levels.map((l) => (l.id === id ? { ...l, ...editValues } : l)))
    setEditingId(null)
  }

  const handleDelete = (id: number) => {
    setLevels(levels.filter((l) => l.id !== id))
  }

  const handleAddLevel = () => {
    if (!newLevel.name) return
    setLevels([
      ...levels,
      {
        id: Date.now(),
        name: newLevel.name,
        bgColor: "bg-orange-400",
        referralRange: newLevel.referralRange,
        reward: newLevel.reward,
      },
    ])
    setNewLevel({ name: "", referralRange: "", reward: "" })
    setShowAddForm(false)
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Referral Levels</h2>
        <Button
          onClick={() => setShowAddForm(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 rounded-xl"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Level
        </Button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4 flex flex-col gap-3">
          <p className="text-sm font-semibold text-gray-700">New Level</p>
          <div className="grid grid-cols-3 gap-3">
            <Input
              placeholder="Level name (e.g. Platinum)"
              value={newLevel.name}
              onChange={(e) => setNewLevel({ ...newLevel, name: e.target.value })}
              className="border-gray-200"
            />
            <Input
              placeholder="e.g. 100-200 referrals"
              value={newLevel.referralRange}
              onChange={(e) => setNewLevel({ ...newLevel, referralRange: e.target.value })}
              className="border-gray-200"
            />
            <Input
              placeholder="e.g. ₦5000 reward"
              value={newLevel.reward}
              onChange={(e) => setNewLevel({ ...newLevel, reward: e.target.value })}
              className="border-gray-200"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={() => setShowAddForm(false)}>
              <X className="w-3 h-3 mr-1" /> Cancel
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={handleAddLevel}>
              <Check className="w-3 h-3 mr-1" /> Save
            </Button>
          </div>
        </div>
      )}

      {/* Levels List */}
      <div className="flex flex-col gap-3">
        {levels.map((level) => (
          <div
            key={level.id}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            {editingId === level.id ? (
              /* Inline edit mode */
              <div className="flex items-center gap-3 flex-1 mr-4">
                <div className={`w-10 h-10 ${level.bgColor} rounded-full flex items-center justify-center text-lg shrink-0`}>
                  {levelIcons[level.name] || "🏅"}
                </div>
                <div className="grid grid-cols-3 gap-2 flex-1">
                  <Input
                    value={editValues.name || ""}
                    onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                    className="border-orange-200 text-sm h-9"
                    placeholder="Level name"
                  />
                  <Input
                    value={editValues.referralRange || ""}
                    onChange={(e) => setEditValues({ ...editValues, referralRange: e.target.value })}
                    className="border-orange-200 text-sm h-9"
                    placeholder="Referral range"
                  />
                  <Input
                    value={editValues.reward || ""}
                    onChange={(e) => setEditValues({ ...editValues, reward: e.target.value })}
                    className="border-orange-200 text-sm h-9"
                    placeholder="Reward"
                  />
                </div>
              </div>
            ) : (
              /* View mode */
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-10 h-10 ${level.bgColor} rounded-full flex items-center justify-center text-lg shrink-0`}>
                  {levelIcons[level.name] || "🏅"}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{level.name}</p>
                  <p className="text-sm text-gray-500">
                    {level.referralRange}
                    <span className="mx-2">•</span>
                    {level.reward}
                  </p>
                </div>
              </div>
            )}

            {/* Action icons */}
            <div className="flex items-center gap-2 shrink-0">
              {editingId === level.id ? (
                <>
                  <button
                    onClick={() => handleSaveEdit(level.id)}
                    className="p-2 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(level)}
                    className="p-2 rounded-lg text-gray-400 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(level.id)}
                    className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}