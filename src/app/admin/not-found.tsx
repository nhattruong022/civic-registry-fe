export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Không tìm thấy trang</h2>
      <p className="text-gray-600 mb-4">Trang bạn đang tìm kiếm không tồn tại.</p>
      <a
        href="/admin/dashboard"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Về trang chủ
      </a>
    </div>
  )
}

